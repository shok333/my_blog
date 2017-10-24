<?php

use yii\db\Migration;

class m171017_094119_Comments extends Migration
{
    public function safeUp()
    {
        $this->createTable('comments',[
            'id' => $this->primaryKey(),
            'text' => $this->string(),
            'author' => $this->string(),
            'parent' => $this->integer(),
            'date' => $this->string(),

            'post_id' => $this->integer(),
            'number' => $this->integer(),
            'type' => $this->string(),

        ]);
    }

    public function safeDown()
    {
        echo "m171017_094119_Comments cannot be reverted.\n";

        return false;
    }

    /*
    // Use up()/down() to run migration code without a transaction.
    public function up()
    {

    }

    public function down()
    {
        echo "m171017_094119_Comments cannot be reverted.\n";

        return false;
    }
    */
}
