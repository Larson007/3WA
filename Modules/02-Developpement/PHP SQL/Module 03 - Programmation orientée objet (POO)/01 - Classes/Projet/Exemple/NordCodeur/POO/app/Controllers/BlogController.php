<?php

namespace App\Controllers;


/* This class will return the view for the blog index page and the show page for the blog post with the
given id */
class BlogController extends Controller
{

/**
 * This function returns the view for the welcome page
 * 
 * @return view welcome.
 */
    public function welcome()
    {
        return $this->view('blog.welcome');
    }


/**
 * Get all the posts from the database and pass them to the view
 * 
 * @return view method is returning the view file index.
 */
    public function index()
    {
        $stmt = $this->db->getPDO()->query('SELECT * FROM posts ORDER BY created_at DESC');
        $posts = $stmt->fetchAll();
        
        return $this->view('blog.index', compact('posts'));
    }


/**
 * Get the post with the given id from the database and pass it to the view
 * 
 * @param int id The id of the post to show.
 * 
 * @return view method is returning the view file show.
 */
    public function show(int $id)
    {   
        $stmt = $this->db->getPDO()->prepare('SELECT * FROM posts WHERE id = :id');
        $stmt->execute([':id' => $id]);
        $post = $stmt->fetch();

        return $this->view('blog.show', compact('post'));
    }
}
