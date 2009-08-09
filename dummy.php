<?
$foo = $_REQUEST;
$foo['extra_thing'] = 'hello there!';
echo (json_encode($foo));
?>