<h1>Les derniers articles</h1>


    <?php foreach ($params['posts'] as $post) : ?>
        <div class="card mb-3">
            <div class="card-body">
                <h5 class="card-title"><?= $post->title ?></h5>
                <small><?= $post->created_at ?></small>
                <p class="card-text"><?= $post->content ?></p>
                <a href="/posts/<?= $post->id ?>" class="btn btn-primary">Lire plus</a>
            </div>
        </div>
    <?php endforeach ?>
