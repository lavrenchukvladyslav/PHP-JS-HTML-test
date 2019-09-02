<?php
if (isset($_POST["field"]) && isset($_POST["operator"]) && isset($_POST["value"]) && ($_POST["field"] !== 'Field...') && ($_POST["operator"] !== 'Operator...' && ($_POST["value"] !== ''))
) {

$result = array(
    'field' => $_POST["field"],
    'operator' => $_POST["operator"],
    'value' => $_POST["value"]
);

echo json_encode($result);
}

?>