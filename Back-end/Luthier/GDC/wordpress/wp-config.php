<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'u413390696_gWdt7' );

/** Database username */
define( 'DB_USER', 'u413390696_0BI2t' );

/** Database password */
define( 'DB_PASSWORD', 'zqqgwQS8IB' );

/** Database hostname */
define( 'DB_HOST', '127.0.0.1' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          'RLFUnX@XTFa=GRX(gVH3AWq6F.#sr2{dy0z80e0jED6Zmc0+c?Y1HZHR?Q#]]RX]' );
define( 'SECURE_AUTH_KEY',   '8/e(n=rH`ucO$9aCCA#:e$S0^);l`DmOFJ{/_!yNz2vdj 8H(y7})&Lb6qTi`+wL' );
define( 'LOGGED_IN_KEY',     'cc(5r27j-DQ,5?k_0) z[LV{dK)hZ8D{~;UVc)5qRu^nMMpn(zucb1-:: DijX7w' );
define( 'NONCE_KEY',         '~4NbigV4~}*1QYuw+len<YFHw`7TN5gtv.L,}Ej izw*J1bP9kEyU| <8^[:)_f<' );
define( 'AUTH_SALT',         '*#!)&S[y]]F`$.w `MjFQ3RlkF<wXcDWw!bYIYy`+@INh9Ga_Eh]?uG0~*Ul*R.i' );
define( 'SECURE_AUTH_SALT',  '<X{am ,DEm?M-cpyA)bF[tU&<F^;g,98951D2YB)%<#zI+fnoDcX`?M_v]zS+z2G' );
define( 'LOGGED_IN_SALT',    'b9Ku@*&q~+R*={Mn!]QI_qE_v4UH2!E1WPS`Ok)=RXh|g+:wUfKyerNuA}2M)`P=' );
define( 'NONCE_SALT',        'JA/nt>R#b~Kq*4%6R$RW0G.q?IJC$usUvDtu5j-J!xxC;=P2i,qAy.0OC-pttwh1' );
define( 'WP_CACHE_KEY_SALT', 'ffyFKo2gG|:D+%CLXypT0iBBf JK)#]bW,)J8(4Um[0)y1*NYE+7Lk(Q9O@j|`_~' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );


/* Add any custom values between this line and the "stop editing" line. */



define( 'FS_METHOD', 'direct' );
define( 'WP_AUTO_UPDATE_CORE', 'minor' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
