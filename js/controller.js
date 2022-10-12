'use strict'

$(document).ready(onInitPage)

function onInitPage() {
  renderProjs()
}

function renderProjs() {
  var projs = getProjs()

  var strHTMLs = projs.map(
    (proj) => `<div class="col-md-4 col-sm-6 portfolio-item">
        <a class="portfolio-link"
          data-toggle="modal"
          href="#portfolioModal1"
        >
          <div class="portfolio-hover">
            <div class="portfolio-hover-content">
              <i class="fa fa-plus fa-3x"></i>
            </div>
          </div>
          <img
            class="img-fluid"
            src="img/portfolio/01-thumbnail.jpg"
            alt=""
          />
        </a>
        <div class="portfolio-caption">
          <h4>${proj.name}</h4>
          <p class="text-muted">${proj.title}</p>
        </div>
      </div>`
  )

  $('.grid-items').html(strHTMLs.join(''))
}
