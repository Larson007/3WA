<?php

namespace App\Controllers;


/* This class will return the view for the blog index page and the show page for the blog post with the
given id */
class BlogController extends Controller
{

/**
 * This function returns the view for the blog index page
 * 
 * @return The view.
 */
    public function index()
    {
        return $this->view('blog.index');
    }

/**
 * This function will return the view for the show page for the blog post with the given id
 * 
 * @param int id The id of the blog post.
 * @return The view.
 */
    public function show(int $id)
    {   
        /* db is set in 'controllers/Controller' */
        $req = $this->db->getPDO()->query('SELECT * FROM posts');
        $posts = $req->fetchAll();
        foreach ($posts as $post) {
            echo $post->title;
        }
        return $this->view('blog.show', compact('id'));
    }
}
