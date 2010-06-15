<?
$foo = $_POST;
$foo['message'] = 'Your information has been saved!';
echo (json_encode($foo));
?>