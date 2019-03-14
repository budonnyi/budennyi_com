import React from 'react'
import Classes from './FilmView.module.css'
import FilmData from '../FilmData'

const FilmView = props => {
  return (
    <div class="maincontent col-md-offset-4 col-md-7 col-sm-12 col-xs-12">

      <table class="wrapper">
        <tr>
          <td rowspan="2" class="cell" style="vertical-align: top; ">
            <div class="" style="">
              <?= Html::img(('/web/images/posters/' . $movie->image_view . '.jpeg'), ['class' => 'bigpicture img-responsive', 'alt' => $movie->name]) ?>

              <FilmData

              />
            </div>
          </td>

          <td style="vertical-align: top;">
            <div>
              <?php
              $text = $movie->description;
              $string = explode("/", $text);
              ?>
              <?php $i = 1; ?>
              <?php foreach ($string as $item) : ?>
              <div class="description" <?php if ($i % 2 == 0) echo ' style="float: right;" '; ?>>
              <p>
                <?= $item ?>
              </p>
            </div>
            <?php $i++; ?>
            <?php endforeach; ?>
    </div>
</td>
</tr>

  <tr>
    <td style="vertical-align: bottom; ">
      <div class="">
        <?php $image = (getimagesize('http://budennyi.com/web/images/preview/' . 'trailer' . $movie->trailer . '.jpeg')); ?>
        <?php if ($image[0] > 500) : ?>

        <!-- HORIZONTAL BUTTONS -->
        <div>
          <?php foreach ($trailers as $value) : ?>
          <?php if ($movie->$value) : ?>
          <div class="" style="margin-right: 15px;">
            <a href="#" id="go" class=" videoframe"
               data-content="https://player.vimeo.com/video/<?= $movie->$value ?>">
              <?= Html::img(('/web/images/preview/' . 'trailer' . $movie->$value . '.jpeg'), ['class' => 'main-image', 'alt' => $movie->name]) ?>
            </a>
          </div>
          <?php endif; ?>
          <?php endforeach; ?>
        </div>

        <?php else : ?>

        <!-- VERTICAL BUTTONS -->
        <div class="" style="margin-left: -8px; padding-bottom: -30px; margin-bottom: -15px;">
          <?php foreach ($trailers as $value) : ?>
          <?php if ($movie->$value) : ?>
          <div
            class="col-sm-<?= ($movie->trailer2) ? '4' : '6'; ?> col-xs-<?= ($movie->trailer2) ? '4' : '6'; ?>"
            style="padding-left: 8px; padding-right: 0px; ">
            <a href="#" id="go" class="videoframe"
               data-content="https://player.vimeo.com/video/<?= $movie->$value ?>">
              <?= Html::img(('/web/images/preview/' . 'trailer' . $movie->$value . '.jpeg'), ['class' => 'main-image ', 'alt' => $movie->name]) ?>
            </a>
          </div>
          <?php endif; ?>
          <?php endforeach; ?>
          <?php if ($movie->action_video) : ?>
          <div
            class="col-sm-<?= ($movie->trailer2) ? '4' : '6'; ?> col-xs-<?= ($movie->trailer2) ? '4' : '6'; ?>"
            style="padding-left: 8px; padding-right: 0px; padding-bottom: -50px;">
            <?= Html::a(Html::img(('/web/images/preview/' . 'trailer' . $movie->action_video . '.jpeg'), ['class' => 'main-image ', 'alt' => $movie->name]), ['video/video', 'id' => $movie->action_video]) ?>
          </div>
          <?php endif; ?>
        </div>

        <?php endif; ?>
      </div>
    </td>
  </tr>
</table>

<?php yii\widgets\Pjax::end(); ?>
</div>
  )
}

export default FilmView
