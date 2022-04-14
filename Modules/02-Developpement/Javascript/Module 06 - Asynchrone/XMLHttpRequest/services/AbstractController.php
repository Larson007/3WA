<?php
namespace Services;

require_once dirname(__DIR__).DIRECTORY_SEPARATOR.'configuration'.DIRECTORY_SEPARATOR.'viewsConfig.php';

abstract class AbstractController
{   
    public function __construct()
    {
        
    }

    protected function renderView(string $viewName, array $params = null)
    {   
        ob_start();
        require_once $this->viewResolver($viewName);
        $content = ob_get_clean();
        require_once dirname(__DIR__).DIRECTORY_SEPARATOR.VIEWS_FOLDER.DIRECTORY_SEPARATOR.'template'.DIRECTORY_SEPARATOR.'layout'.WIEWS_EXTENSION;
    }

    private function viewResolver($viewName){
        $viewName = explode('_', $viewName);
        
        if(count($viewName) > 1){
            $folder = $viewName[0];
            $view = $viewName[1];
            return dirname(__DIR__).DIRECTORY_SEPARATOR.VIEWS_FOLDER.DIRECTORY_SEPARATOR.$folder.DIRECTORY_SEPARATOR.$view.WIEWS_EXTENSION;
        } else {
            $view = $viewName;
            return dirname(__DIR__).DIRECTORY_SEPARATOR.VIEWS_FOLDER.DIRECTORY_SEPARATOR.$view.WIEWS_EXTENSION;
        }
    }
}