<?php
namespace Services; 

use SplFileInfo;
use Services\MyException\{FileSizeException, AllowedFileException, FileUploadException};




class FilesManager
{
    private string $name;
    private string $type;
    private string $tmpName;
    private int $size;
    private int $error;
    private string $uniqueName;
    private string $extension;

    public function __construct(array $files, array $allowedEsxtenstion)
    {
        $this->name = $files['name'];
        $this->type = $files['type'];
        $this->tmpName = $files['tmp_name'];
        $this->size = $files['size'];
        $this->error = $files['error'];
        $this->uniqueName = rand().time().rand().time();
        $this->extension = (new SplFileInfo($this->name))->getExtension();
        $this->allowedEsxtenstion = $allowedEsxtenstion;
    }

    public function getName()
    {
        return $this->name;
    }
    
    public function getType()
    {
        return $this->type;
    }

    public function getTmpName()
    {
        return $this->tmpName;
    }

    public function getSize()
    {
        return $this->size;
    }

    public function getError()
    {
        return $this->error;
    }

    public function getUniqueName()
    {
        return $this->uniqueName.'.'.$this->extension;
    }

    public function isValidSize($max)
    {
        if($this->size > $max) {
            throw new FileSizeException('fichier trop volumineux');
        }
    }

    public function isAllowed()
    {
        if(!in_array($this->extension, $this->allowedEsxtenstion)) {
            throw new AllowedFileException('format fichier non authorisé');
        }
    }

    public function isValid()
    {
        if($this->error !== UPLOAD_ERR_OK) {
            match($this->error){
                UPLOAD_ERR_INI_SIZE => throw new FileSizeException('fichier trop volumineux'),
                UPLOAD_ERR_FORM_SIZE => throw new FileSizeException('le formulaire trouve le fichier trop lourd'),
                UPLOAD_ERR_PARTIAL => throw new FileUploadException('probleme lors du chargement du fichier'),
                UPLOAD_ERR_NO_FILE => throw new FileUploadException(' Aucun fichier n\'a été téléchargé.'),
                UPLOAD_ERR_NO_TMP_DIR => throw new FileUploadException('dossier temporaire est manquant'),
                UPLOAD_ERR_CANT_WRITE => throw new FileUploadException('Échec de l\'écriture du fichier sur le disque.'),
                UPLOAD_ERR_EXTENSION => throw new FileUploadException('Une extension PHP a arrêté l\'envoi de fichier'),
            };
        }
    }

    public function saveFile($repository)
    {
        move_uploaded_file($this->tmpName, $repository.'/'.$this->getUniqueName());
        return  $repository.'/'.$this->getUniqueName();
    }
}