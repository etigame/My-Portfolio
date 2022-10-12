'use strict'

$(document).ready(onInitPage)
// $('.portfolio-link').click(renderModal)

function onInitPage() {
  renderProjs()
}

function renderProjs() {
  var projs = getProjs()

  var strHTMLs = projs.map(
    (proj) =>
      `<div class="col-md-4 col-sm-6 portfolio-item">
        <a class="portfolio-link"
          data-toggle="modal"
          href="#portfolioModal" onclick="renderProjModal('${proj.id}')"
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

function renderProjModal(projID) {
  var projs = getProjs()

  var proj = projs.find((proj) => proj.id === projID)

  var strHTMLs = `
    <div
      class="portfolio-modal modal fade"
      id="portfolioModal"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="close-modal" data-dismiss="modal">
            <div class="lr">
              <div class="rl"></div>
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-lg-8 mx-auto">
                <div class="modal-body">
                  <!-- Project Details Go Here -->
                  <h2>${proj.name}</h2>
                  <p class="item-intro text-muted">${proj.title}</p>
                  <img
                    class="img-fluid d-block mx-auto"
                    src="img/portfolio/01-full.jpg"
                    alt=""
                  />
                  <p>${proj.desc}</p>
                  <ul class="list-inline">
                    <li>Date: ${proj.publishedAt}</li>
                  </ul>
                  <a class="btn btn-info d-block d-grid col-4 mx-auto mb-4" href="${proj.url}" target="_blank" role="button">Check it Out!</a>
                  <button
                    class="btn btn-primary"
                    data-dismiss="modal"
                    type="button"
                  >
                    <i class="fa fa-times"></i>
                    Close Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    `
    $('.portfolio-modals').html(strHTMLs)
}
