<?php
session_start();
/*
 * Page used to process requests and redirect appropriately.
 */


    $request = array();
    if (!empty($_POST)) $this->request = $_POST;
    if (!empty($_GET)) $this->request = $_GET;
    
    require_once 'Action_Display.php';
    
    $display = new Action_Display();
    $display->mainform();
    
?>
