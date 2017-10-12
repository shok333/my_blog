<?php

use yii\db\Migration;

class m171009_102454_texts extends Migration
{
    public function safeUp()
    {
        $this->createTable('texts',[
            'id' => $this->primaryKey(),
            'post_id' => $this->integer(),
            'number' => $this->integer(),
            'type' => $this->string(),
            'value' => $this->string(),
        ]);
    }

    public function safeDown()
    {
        echo "m171009_102454_texts cannot be reverted.\n";

        return false;
    }

    /*
    // Use up()/down() to run migration code without a transaction.
    public function up()
    {

    }

    public function down()
    {
        echo "m171009_102454_texts cannot be reverted.\n";

        return false;
    }
    */
}
