const fs = require('fs');
const path = require('path');

/**
 * Generic data handler for JSON files
 */
class DataHandler {
  /**
   * Initialize the data handler
   * @param {string} fileName - Name of the JSON file to handle
   */
  constructor(fileName) {
    this.filePath = path.join(__dirname, '..', 'data', fileName);
  }

  /**
   * Get all items from the file
   * @param {Object} queryParams - Query parameters for filtering
   * @returns {Array} Array of items
   */
  getAll(queryParams = {}) {
    try {
      const data = JSON.parse(fs.readFileSync(this.filePath, 'utf8'));
      
      // If no query params, return all data
      if (Object.keys(queryParams).length === 0) {
        return data;
      }
      
      // Filter data based on query parameters
      return data.filter(item => {
        return Object.entries(queryParams).every(([key, value]) => {
          // Handle numeric values
          if (!isNaN(value) && typeof item[key] === 'number') {
            return item[key] === Number(value);
          }
          
          // Handle string values
          if (typeof item[key] === 'string') {
            return item[key].toLowerCase().includes(value.toLowerCase());
          }
          
          // Handle array values (e.g., classIds)
          if (Array.isArray(item[key])) {
            return item[key].includes(value) || item[key].includes(Number(value));
          }
          
          return item[key] === value;
        });
      });
    } catch (error) {
      console.error(`Error reading ${this.filePath}:`, error);
      return [];
    }
  }

  /**
   * Get a specific item by ID
   * @param {string|number} id - ID of the item to retrieve
   * @returns {Object|null} Item or null if not found
   */
  getById(id) {
    try {
      const data = JSON.parse(fs.readFileSync(this.filePath, 'utf8'));
      // Handle both numeric and string IDs
      return data.find(item => item.id === id || item.id === Number(id)) || null;
    } catch (error) {
      console.error(`Error reading ${this.filePath}:`, error);
      return null;
    }
  }

  /**
   * Add a new item
   * @param {Object} item - Item to add
   * @returns {Object} Added item
   */
  create(item) {
    try {
      const data = JSON.parse(fs.readFileSync(this.filePath, 'utf8'));
      
      // Generate new ID if one isn't provided
      let newItem = { ...item };
      
      if (!newItem.id) {
        // Check if existing IDs are numeric or string format
        const isNumericIds = data.length > 0 && typeof data[0].id === 'number';
        
        if (isNumericIds) {
          // For numeric IDs, find the max and add 1
          const newId = Math.max(...data.map(item => item.id), 0) + 1;
          newItem.id = newId;
        } else {
          // For string IDs, generate a unique ID with a timestamp
          const prefix = this.filePath.includes('classes') ? 'CLS' : 'STU';
          const timestamp = Date.now().toString().slice(-6);
          newItem.id = `${prefix}${timestamp}`;
        }
      }
      
      // Add to data and save
      data.push(newItem);
      fs.writeFileSync(this.filePath, JSON.stringify(data, null, 2));
      
      return newItem;
    } catch (error) {
      console.error(`Error updating ${this.filePath}:`, error);
      throw error;
    }
  }

  /**
   * Update an existing item
   * @param {string|number} id - ID of the item to update
   * @param {Object} updates - Updates to apply
   * @returns {Object|null} Updated item or null if not found
   */
  update(id, updates) {
    try {
      const data = JSON.parse(fs.readFileSync(this.filePath, 'utf8'));
      
      // Find index of item with either string or numeric ID
      const index = data.findIndex(item => item.id === id || item.id === Number(id));
      if (index === -1) return null;
      
      // Ensure ID remains the same type
      const originalId = data[index].id;
      
      // Update item
      const updatedItem = { ...data[index], ...updates, id: originalId };
      data[index] = updatedItem;
      
      // Save changes
      fs.writeFileSync(this.filePath, JSON.stringify(data, null, 2));
      
      return updatedItem;
    } catch (error) {
      console.error(`Error updating ${this.filePath}:`, error);
      throw error;
    }
  }

  /**
   * Delete an item
   * @param {string|number} id - ID of the item to delete
   * @returns {boolean} Success status
   */
  delete(id) {
    try {
      const data = JSON.parse(fs.readFileSync(this.filePath, 'utf8'));
      
      // Filter out the item with either string or numeric ID
      const newData = data.filter(item => item.id !== id && item.id !== Number(id));
      
      // If no item was removed, return false
      if (newData.length === data.length) return false;
      
      // Save changes
      fs.writeFileSync(this.filePath, JSON.stringify(newData, null, 2));
      
      return true;
    } catch (error) {
      console.error(`Error deleting from ${this.filePath}:`, error);
      throw error;
    }
  }
}

module.exports = DataHandler; 