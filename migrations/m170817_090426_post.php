<?php

use yii\db\Migration;
use yii\db\Schema;

class m170817_090426_post extends Migration
{
    public function safeUp()
    {
        $this->createTable('post',[
            'id' => $this->primaryKey(),
            'header' => $this->string(),
            'date' => $this->date(),
            'image' => $this->string(),
            'url' => $this->string(),
            'author' => $this->string()
        ]);
        $this->insert('post',[
            'header' => 'О Николае Чеулзе',
            'image' => '/web/images/sherlock2.jpg',
            'url' => 'cms'
        ]);
        $this->insert('post',[
            'header' => 'О Николае Чеулзе',
            'image' => '/web/images/sherlock2.jpg',
            'url' => 'cms2'
        ]);
        $this->insert('post',[
            'header' => 'О Николае Чеулзе',
            'image' => '/web/images/sherlock2.jpg',
            'url' => 'cms3'
        ]);
        $this->insert('post',[
            'header' => 'О Николае Чеулзе',
            'image' => '/web/images/sherlock2.jpg',
            'url' => 'cms4'
        ]);
        $this->insert('post',[
            'header' => 'О Николае Чеулзе',
            'image' => '/web/images/sherlock2.jpg',
            'url' => 'cms5'
        ]);
        $this->insert('post',[
            'header' => 'О Николае Чеулзе',
            'image' => '/web/images/sherlock2.jpg',
            'url' => 'cms25'
        ]);
        $this->insert('post',[
            'header' => 'О Николае Чеулзе',
            'image' => '/web/images/sherlock2.jpg',
            'url' => 'cms35'
        ]);
        $this->insert('post',[
            'header' => 'О Николае Чеулзе',
            'image' => '/web/images/sherlock2.jpg',
            'url' => 'cms45'
        ]);

    }

    public function safeDown()
    {
        $this->delete('post',['id' => 1]);
        $this->dropTable('post');
    }

    /*
    // Use up()/down() to run migration code without a transaction.
    public function up()
    {

    }

    public function down()
    {
        echo "m170817_090426_post cannot be reverted.\n";

        return false;
    }
    */
}
