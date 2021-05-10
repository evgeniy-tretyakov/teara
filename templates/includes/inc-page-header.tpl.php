<header id="navbar" role="banner" class="header">

  <div class="navbar-header">
          <?php if (!empty($page['highlighted'])): ?>
            <?php print render($page['highlighted']); ?>
          <?php endif; ?> 
          <div class="header-mobile-buttons">

            <div class="js-mobile-trigger">
              <span class="line-1"></span>
              <span class="line-2"></span>
              <span class="line-3"></span>
            </div>

            <div class="js-catalog-trigger">Catalogue</div>

            <div class="homepage-button"><a href="/"></a></div>

          </div>
  </div>

  <div class="header-container">


    <?php if (!empty($primary_nav) || !empty($secondary_nav) || !empty($page['navigation'])): ?>
      <div class="navbar-collapse collapse" id="navbar-collapse">
        <nav role="navigation">
          <?php if (!empty($primary_nav)): ?>
            <?php print render($primary_nav); ?>
          <?php endif; ?>
          <?php if (!empty($secondary_nav)): ?>
            <?php print render($secondary_nav); ?>
          <?php endif; ?>
          <?php if (!empty($page['navigation'])): ?>
            <?php print render($page['navigation']); ?>
          <?php endif; ?>
          <?php if (!empty($page['header'])): ?>
            <?php print render($page['header']); ?>
          <?php endif; ?>
        </nav>
      </div>
    <?php endif; ?>

  </div>
</header>
