<?php

/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, and ABSPATH. You can find more information by visiting
 * {@link https://codex.wordpress.org/Editing_wp-config.php Editing wp-config.php}
 * Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
 //Added by WP-Cache Manager
 //Added by WP-Cache Manager
define('WP_CACHE', true); //Added by WP-Cache Manager
define( 'WPCACHEHOME', '/home/harriedr/public_html/blog/wp-content/plugins/wp-super-cache/' ); //Added by WP-Cache Manager
define('DB_NAME', 'harriedr_o2sq1');

/** MySQL database username */
define('DB_USER', 'harriedr_o2sq1');

/** MySQL database password */
define('DB_PASSWORD', 'U*tbP2q~A333[]1');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '6zrKozEVIo6ugWVWRhTZozwcpr4eZsX64TrAxusCdatEKZNpmxvnUcIi5HywyQjc');
define('SECURE_AUTH_KEY',  '3aQVWynFdmvtWKS4gwNU0ug9OmXU482qHjDBzl8LU0fm0ZYkrf2aMQ2gAilLSU2w');
define('LOGGED_IN_KEY',    'C3H0CKqb19aoP0SEppxlurhLdqEqarMDnQB6hPDQqSzNqegchjW0mTNnWfrlgjkk');
define('NONCE_KEY',        'ZBVTN2QnQbBViwWHvUmUdCogzX6hObCxgvy3kV1KF9kJBlFSoIQYmbnRTisEgBOZ');
define('AUTH_SALT',        'MP6QOg7p87lfjHhUnch3o7lqglHRKxaLzddZsvtfyYH8i6s6FAF8MsA5xjsOai3l');
define('SECURE_AUTH_SALT', 'APf7RNAnYxlWcYk2NtB0S0iTImmVRlD49ZWsBk7ZV6WYz7oZqymAAHBhS4ifBHYT');
define('LOGGED_IN_SALT',   'l3wGDH2XZfw9XEPkL8sSRvywGOikiUL5fNTOsB4ZMfYoE0FrwFPokNCQHJvtizRf');
define('NONCE_SALT',       'PoKG2DLsry3NbhOdg2mdOCQJNjOHkoHdSCKotpamVcIleSnCfybwBuj60OEfkZkH');

/**
 * Other customizations.
 */
define('FS_METHOD','direct');define('FS_CHMOD_DIR',0755);define('FS_CHMOD_FILE',0644);
define('WP_TEMP_DIR',dirname(__FILE__).'/wp-content/uploads');

/**
 * Turn off automatic updates since these are managed upstream.
 */
define('AUTOMATIC_UPDATER_DISABLED', true);


/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'o2sq_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');