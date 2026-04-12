const { getPool } = require('./db');

/**
 * Get a home section by name
 */
exports.getHomeSectionByName = async (sectionName) => {
  const db = getPool();
  const [rows] = await db.execute(
    'SELECT * FROM home_sections WHERE `section` = ? LIMIT 1',
    [sectionName]
  );
  return rows[0] || null;
};

/**
 * Get all home sections
 */
exports.getAllHomeSections = async () => {
  const db = getPool();
  const [rows] = await db.execute(
    'SELECT * FROM home_sections ORDER BY `section`'
  );
  return rows;
};

/**
 * Get active home sections (for frontend)
 */
exports.getActiveHomeSections = async () => {
  const db = getPool();
  const [rows] = await db.execute(
    'SELECT * FROM home_sections WHERE is_active = 1 ORDER BY `section`'
  );
  return rows;
};

/**
 * Update home section
 */
exports.updateHomeSection = async (sectionName, data) => {
  const db = getPool();
  
  const {
    image_url,
    top_label,
    main_title,
    description,
    button_text,
    button_link,
    is_active
  } = data;

  const updateFields = [];
  const values = [];

  if (image_url !== undefined) {
    updateFields.push('image_url = ?');
    values.push(image_url || null);
  }
  if (top_label !== undefined) {
    updateFields.push('top_label = ?');
    values.push(top_label || null);
  }
  if (main_title !== undefined) {
    updateFields.push('main_title = ?');
    values.push(main_title || null);
  }
  if (description !== undefined) {
    updateFields.push('`description` = ?');
    values.push(description || null);
  }
  if (button_text !== undefined) {
    updateFields.push('button_text = ?');
    values.push(button_text || null);
  }
  if (button_link !== undefined) {
    updateFields.push('button_link = ?');
    values.push(button_link || null);
  }
  if (is_active !== undefined) {
    updateFields.push('is_active = ?');
    values.push(is_active ? 1 : 0);
  }

  if (updateFields.length === 0) {
    return await exports.getHomeSectionByName(sectionName);
  }

  updateFields.push('updated_at = CURRENT_TIMESTAMP');
  values.push(sectionName);

  const query = `UPDATE home_sections SET ${updateFields.join(', ')} WHERE \`section\` = ?`;
  
  await db.execute(query, values);
  return await exports.getHomeSectionByName(sectionName);
};

/**
 * Get New Arrivals section (specific helper)
 */
exports.getNewArrivals = async () => {
  return await exports.getHomeSectionByName('new_arrivals');
};

/**
 * Update New Arrivals section
 */
exports.updateNewArrivals = async (data) => {
  return await exports.updateHomeSection('new_arrivals', data);
};

/**
 * Get Our Story section (specific helper)
 */
exports.getOurStory = async () => {
  return await exports.getHomeSectionByName('our_story');
};

/**
 * Update Our Story section
 */
exports.updateOurStory = async (data) => {
  return await exports.updateHomeSection('our_story', data);
};
