$(document).ready(function () {
  var nombre_de_places = -1;
  $("#nbp").click(function () {

    $("#chaises").empty();
    var value = $('#nbp').find(":selected").val();
    var image = "<img src='images/chaise.jpg'/>";

    for (var i = 0; i < value; i++) {
      $("#chaises").append(image);
    }
    nombre_de_places = value;
  });
  var date;
  $('#date').Zebra_DatePicker({
    format: 'd/m/Y', onSelect: function () {
      var dt = $(this).context.value;
      date = dt;
    }
  });

  $("#b1").click(function () {
    var nom = $('#nom').val();
    var n = nom.length;
    var tel = $('#tel').val();
    var t = tel.length;

    if (nombre_de_places == -1) {
      alert('veuillez indiquer le nombre de places a réserver');
    } else if (date == null) {
      alert('veuillez indiquer la date de reservation');
    } else if (n < 10 || isNaN(nom) == false) {
      alert('Nom et Prénom trés cours');
    } else if (t < 8 || t > 8) {
      alert('Numéro de telephone invalide');
    }
    else {
      var civilite;
      if ($('input[name="civilite"]').is(':checked')) {
        $("input[name=civilite]:checked").each(
          function () {
            var civ = $(this).val();
            if (civ == "mme") {
              civ = "Madame";
            }
            else if (civ == "mlle") {
              civ = "Mademoiselle";
            }
            else if (civ == "m") {
              civ = "Monsieur";
            }
            civilite = civ;
          });

        $("#div_resume").empty();
        var resumer = '<div> Bonjour ' + civilite + '<strong> ' + nom + '</strong> </br> Votre commande du <U>' + date + '</U> a été bien validée les plats commandés sont :</div></br>';
        $("#div_resume").append(resumer);
        var prix = 0;
        $("input[name=cmd]:checked").each(
          function () {
            var var_prix = $(this).data('prix');
            prix = prix + parseFloat(var_prix);
            var commande = $(this).context.value;
            var menu = commande;
            var aff_menu = '<ul> <li>' + menu + '</li> </ul>';

            $("#div_resume").append(aff_menu);

          });
        var aff_prix = 'le montant total de la commande est de ' + prix * nombre_de_places + ' Dinars';
        $("#div_resume").append(aff_prix);

      }
      else {
        alert('veuillez indiquer la civilite');
      }
    }

  });




});