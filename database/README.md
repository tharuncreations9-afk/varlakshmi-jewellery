# Database Setup

## 1. Import the schema

Run the schema to create the database and tables:

```bash
mysql -u root -p < database/schema.sql
```

Or use HeidiSQL / MySQL Workbench to execute `database/schema.sql`.

**If using existing database:** If you already ran `vlj_database.sql`, add AUTO_INCREMENT to `contact_enq`:

```sql
USE varlakshmi_jewllery;
ALTER TABLE contact_enq MODIFY COLUMN contact_id int(10) unsigned zerofill NOT NULL AUTO_INCREMENT;
```

## 2. Configure environment

Copy `.env.example` to `.env` in the project root and set your MySQL credentials:

```
DB_HOST=127.0.0.1
DB_PORT=3306
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=varlakshmi_jewllery
```
