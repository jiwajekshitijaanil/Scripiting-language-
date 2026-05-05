<?php
function greet() {
    echo "Hello, Welcome to PHP!<br>";
}
function add($a, $b) {
    $sum = $a + $b;
    echo "Sum is: " . $sum . "<br>";
}
function square($num) {
    return $num * $num;
}
greet();
add(5, 3);

$result = square(4);
echo "Square is: " . $result;

?>