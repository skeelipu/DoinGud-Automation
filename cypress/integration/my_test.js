/// <reference types="cypress" />

it('DoinGud Test', function(){
  cy.visit("https://hackathon:dghackathon@hackathon.doingud.work");
  cy.get(".DashboardNav__ActionsWrapper-sc-7yr3ef-2 > #doingud_CN > span").click()

  cy.get(".Login__WalletsContainerWrapper-cxbxj2-6 > :nth-child(1) > img").click()
  cy.wait(8000)
 // cy.get(".-walletlink-extension-dialog-box-top-install-region")
   // .contains("Install").invoke('removeAttr', 'target').click()
cy.on('window:alert',()=>{
    cy.get(
  ".cds-interactable-i13lggcw cds-interactableBackground-i1tfznye cds-transparentChildren-t13p63z cds-transparent-t1iirkex cds-button-bszu5zu cds-focusRing-f1r6m9tt cds-fullWidth-f6ekksz cds-scaledDownState-s1v6pvyx cds-primaryForeground-progmjq cds-button-bxm6m07 cds-frontierButton-f1wq5l6k cds-buttonBlock-b4prk4m cds-4-_1vq2ef4 cds-3-_r2sgio").click()
})

cy.wait(20000);
   //cy.get(
     //".cds-typographyResets-t119oo5c cds-headline-ho2otij cds-primaryForeground-progmjq cds-transition-ty35lnf cds-start-s1q2d0t0 cds-noWrap-nqeoca2"
   //).click();



  cy.wait(20000)
  //cy.get(".g-c-R  webstore-test-button-label").click()
//cy.get('[name="alert"]').click();
})