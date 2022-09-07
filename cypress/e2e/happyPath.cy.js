describe("HappyPath", () => {
  it("Open page", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
  });

  it("Select Mexico on suggested Class Example", () => {
    cy.xpath(
      "//input[@type='text' and @placeholder='Type to Select Countries']"
    ).type("Me");

    cy.xpath("//li[@class='ui-menu-item']/div").each(($ele, index, $list) => {
      if ($ele.text().includes("Mexico")) {
        $ele.click();
      } else {
        cy.log($ele.text());
      }
    });
    cy.wait(2000);
  });

  it("Select Option 2 & Option 3 on Dropdown Examples", () => {
    cy.xpath("//select[@name='dropdown-class-example']").select("option2");
    cy.wait(2000);
    cy.xpath("//select[@name='dropdown-class-example']").select("option3");
    cy.wait(2000);
  });

  it("Click Switch Window Example", () => {
    //cy.xpath("//button[contains(text(),'Open Window')]").click();
  });

  it("Enter text to and select Alert option from Switch to alert Option", () => {
    let alertMessage;
    cy.xpath("//input[@placeholder='Enter Your Name']").type("Stori Card");
    //cy.xpath("//input[@type='submit' and @value='Alert']").click();
    cy.get("#alertbtn").click();
    cy.on("windows:alert", (message) => {
      message.should("eq", "Hola");
    });
  });

  it("Enter text to and select Comfirm option from Switch to alert Option", () => {
    cy.on("windows:confirm", (message) => {});
    cy.xpath("//input[@placeholder='Enter Your Name']").type("Stori Card");
    cy.xpath("//input[@type='submit' and @value='Confirm']").click();
  });

  it("Get courses name based from their price", () => {
    cy.log("Course names");
    cy.get("fieldset > #product > tbody > :nth-child(n) > :nth-child(3)").each(
      ($ele, index, $list) => {
        if ($ele.text().includes(30)) {
          cy.get("fieldset > #product > tbody > :nth-child(n) > :nth-child(3)")
            .eq(index)
            .prev()
            .then((courseName) => {
              cy.log(courseName.text());
              console.log(courseName.text());
            });
        }
      }
    );
  });

  it("Get all engineers names", () => {
    cy.log("Names of the engineers");
    cy.get(
      ".tableFixHead > #product > tbody > :nth-child(n) > :nth-child(2)"
    ).each(($ele, index, $list) => {
      if ($ele.text().includes("Engineer")) {
        cy.get(
          ".tableFixHead > #product > tbody > :nth-child(n) > :nth-child(2)"
        )
          .eq(index)
          .prev()
          .then((personName) => {
            cy.log(personName.text());
            console.log(personName.text());
          });
      }
    });
  });
});
