<?php

$params = require(__DIR__ . '/params.php');
$db = require(__DIR__ . '/db.php');

$config = [
    'id' => 'basic',
    'basePath' => dirname(__DIR__),
    'bootstrap' => ['log'],
    'components' => [
        'request' => [
            // !!! insert a secret key in the following (if it is empty) - this is required by cookie validation
            'cookieValidationKey' => '77777',
            'parsers' => [
                'application/json' => 'yii\web\JsonParser', // required for POST input via `php://input`
            ]
        ],
        'cache' => [
            'class' => 'yii\caching\FileCache',
        ],
        'user' => [
            'identityClass' => 'app\models\User',
            'enableAutoLogin' => true,
        ],
        'errorHandler' => [
            'errorAction' => 'site/error',
        ],
        'mailer' => [
            'class' => 'yii\swiftmailer\Mailer',
            'useFileTransport' =>true,
            'transport' => [
                'class' => 'Swift_SmtpTransport',
                'host' => 'cpanel3.d.fozzy.com',
                'username' => 'blog@supertop10.ru',
                'password' => '43124312',
                'port' => '465',
                'encryption' => 'ssl',
            ],
        ],

        'log' => [
            'traceLevel' => YII_DEBUG ? 3 : 0,
            'targets' => [
                [
                    'class' => 'yii\log\FileTarget',
                    'levels' => ['error', 'warning'],
                ],
            ],
        ],
        'db' => $db,
        
        'urlManager' => [
            'enablePrettyUrl' => true,
            'showScriptName' => false,
            'rules' => [
                'csrf' => 'site/csrf',
                'login' =>'site/login',
                'login-test' =>'site/login-test',
                'registration' =>'site/registration',
                'get-status' => 'site/get-status',
                'admin/user-list' => 'site/get-user-list',
                'admin/create-new-post' => 'site/create-new-post',
                'admin/post-list' => 'site/get-post-list',
                'admin/ban-user' => 'site/ban-user',
                'get-posts.json' => 'site/get-post-list',
                '<action>' => 'site/get-post',
            ],
        ],
        
    ],
    'params' => $params,
];

if (YII_ENV_DEV) {
    // configuration adjustments for 'dev' environment
    $config['bootstrap'][] = 'debug';
    $config['modules']['debug'] = [
        'class' => 'yii\debug\Module',
        // uncomment the following to add your IP if you are not connecting from localhost.
        //'allowedIPs' => ['127.0.0.1', '::1'],
    ];

    $config['bootstrap'][] = 'gii';
    $config['modules']['gii'] = [
        'class' => 'yii\gii\Module',
        // uncomment the following to add your IP if you are not connecting from localhost.
        //'allowedIPs' => ['127.0.0.1', '::1'],
    ];
}

return $config;
