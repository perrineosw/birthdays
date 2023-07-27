<?php
class BirthDay {
  public $date;
  public $name;

  public function __construct($date, $name) {
    $this->date = $date;
    $this->name = $name;
  }
}

class BirthdayNotebook {
  private $birthdays = array();

  public function addBirthday($name, $date) {
    $dateAsStr = $date->format('n/j');
    $this->birthdays[$dateAsStr][] = new Birthday($date, $name);
    return $this;
  }

  public function getBirthdays($date) {
    $dateAsStr = $date->format('n/j');
    return array_map(function($b) { return $b->name; }, $this->birthdays[$dateAsStr] ?? []);
  }
}
