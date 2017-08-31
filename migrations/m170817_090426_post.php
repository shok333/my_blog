<?php

use yii\db\Migration;
use yii\db\Schema;

class m170817_090426_post extends Migration
{
    public function safeUp()
    {
        $this->createTable('posts',[
            'id' => $this->primaryKey(),
            'header' => $this->string(),
            'text' => $this->text()->notNull(),
            'date' => $this->date(),
        ]);
        $this->insert('posts',[
            'header' => 'О Николае Чеулзе',
            'text' => 'Это текст о Николае Чеулзе',
        ]);
    }

    public function safeDown()
    {
        $this->delete('posts',['id' => 1]);
        $this->dropTable('posts');
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
