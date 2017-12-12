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
            'image' => $this->string(),
            'url' => $this->string(),
            'author' => $this->string()
        ]);
        $this->insert('post',[
            'header' => 'header 1',
            'image' => 'sherlock2.jpg',
            'url' => 'url',
            'author' => 'admin'
        ]);
        $this->insert('post',[
            'header' => 'header 2',
            'image' => 'sherlock2.jpg',
            'url' => 'url2',
            'author' => 'admin'
        ]);
        $this->insert('post',[
            'header' => 'header 3',
            'image' => 'sherlock2.jpg',
            'url' => 'url3',
            'author' => 'admin'
        ]);
        $this->insert('post',[
            'header' => 'header 4',
            'image' => 'sherlock2.jpg',
            'url' => 'url4',
            'author' => 'admin'
        ]);
        $this->insert('post',[
            'header' => 'header 5',
            'image' => 'sherlock2.jpg',
            'url' => 'url5',
            'author' => 'admin'
        ]);
        $this->insert('post',[
            'header' => 'header 6',
            'image' => 'sherlock2.jpg',
            'url' => 'url25',
            'author' => 'admin'
        ]);
        $this->insert('post',[
            'header' => 'header 7',
            'image' => 'sherlock2.jpg',
            'url' => 'url35',
            'author' => 'admin'
        ]);
        $this->insert('post',[
            'header' => 'header 8',
            'image' => 'sherlock2.jpg',
            'url' => 'url45',
            'author' => 'admin'
        ]);

    }

    public function safeDown()
    {
        $this->delete('post',['id' => 1]);
        $this->delete('post',['id' => 2]);
        $this->delete('post',['id' => 3]);
        $this->delete('post',['id' => 4]);
        $this->delete('post',['id' => 5]);
        $this->delete('post',['id' => 6]);
        $this->delete('post',['id' => 7]);
        $this->delete('post',['id' => 8]);
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
