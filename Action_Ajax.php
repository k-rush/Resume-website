<?php

session_start();

class Action_Ajax {

    public function __contruct() {
        
    }
    
    public function getHTML($request)
    {
        echo file_get_contents($request->get('uri'));
    }
    
    public function test($request)
    {
        echo 'SUCCESS';
    }
}

?>
