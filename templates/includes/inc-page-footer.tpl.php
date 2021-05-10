<footer class="footer">

  <div class="footer__wrapper">


    <?php if (!empty($page['sidebar_second']) || !empty($page['footer'])): ?>
      <div>


          <?php if (!empty($page['sidebar_second'])): ?>
            <?php print render($page['sidebar_second']); ?>
          <?php endif; ?>
          <?php if (!empty($page['footer'])): ?>
            <?php print render($page['footer']); ?>
          <?php endif; ?>

      </div>
    <?php endif; ?>

  </div>
</footer>
