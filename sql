CREATE TABLE filled_forms (
    id INT AUTO_INCREMENT PRIMARY KEY,
    template_id INT NOT NULL, 
    user_id INT NOT NULL,
    filled_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    custom_string1_answer VARCHAR(255),
    custom_string2_answer VARCHAR(255),
    custom_string3_answer VARCHAR(255),
    custom_string4_answer VARCHAR(255),

    custom_int1_answer INT UNSIGNED,
    custom_int2_answer INT UNSIGNED,
    custom_int3_answer INT UNSIGNED,
    custom_int4_answer INT UNSIGNED,

    custom_text1_answer TEXT,
    custom_text2_answer TEXT,
    custom_text3_answer TEXT,
    custom_text4_answer TEXT,

    custom_checkbox1_answer BOOLEAN,
    custom_checkbox2_answer BOOLEAN,
    custom_checkbox3_answer BOOLEAN,
    custom_checkbox4_answer BOOLEAN,

    FOREIGN KEY (template_id) REFERENCES templates(id) ON DELETE CASCADE
);
SELECT 
    TABLE_NAME,
    CONSTRAINT_NAME,
    REFERENCED_TABLE_NAME,
    REFERENCED_COLUMN_NAME
FROM 
    information_schema.KEY_COLUMN_USAGE
WHERE 
    CONSTRAINT_SCHEMA = 'project' 
    AND REFERENCED_TABLE_NAME IS NOT NULL;
