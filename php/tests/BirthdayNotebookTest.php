<?php

use kata\Hello;
use PHPUnit\Framework\TestCase;

class BirthdayNotebookTest extends TestCase
{

    public function test_should_return_empty_when_no_birthday()
    {
        $birthdays = new BirthdayNotebook();
        $this->assertEquals(["John"], $birthdays->getBirthdays(new DateTime('1/1')));
    }

}
