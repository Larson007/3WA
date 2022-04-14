<?php

namespace App\Controllers;

use APP\Models\Post;


class BlogController extends Controller
{
    public function welcome()
    {
        return $this->view('blog.welcome');
    }


    public function index()
    {
        $post = new Post($this->getDB());
        $posts = $post->all();

        
        return $this->view('blog.index', compact('posts'));
    }


    public function show(int $id)
    {   
        $stmt = $this->db->getPDO()->prepare('SELECT * FROM posts WHERE id = :id');
        $stmt->execute([':id' => $id]);
        $post = $stmt->fetch();

        return $this->view('blog.show', compact('post'));
    }
}
