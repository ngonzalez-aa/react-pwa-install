import React from "react";
import { DialogActions, Typography, Button, Box } from "@material-ui/core";
import { platforms } from "./Platforms";
import { IOSShareIcon, FireFoxA2HSIcon, MenuIcon, OperaA2HSIcon } from "./Icons";

function DialogActionWithInstructions(props) {
  return (
    <Box width="100%" display="flex" flexDirection="column">
      <Box>
        <Typography variant="subtitle1">Para instalar esta aplicación:</Typography>
        <ul>
          <li>
            <span style={{ display: "flex", alignItems: "center" }}>{props.action1}</span>
          </li>
          <li>{props.action2}</li>
        </ul>
      </Box>
      <Box width="100%" textAlign="right">
        <Button onClick={props.onSubmit}>Ok</Button>
      </Box>
    </Box>
  );
}

export default function InstallDialogAction(props) {
  return (
    <>
      <DialogActions>
        {props.platform === platforms.NATIVE && (
          <>
            <Button onClick={props.onClose}>Cancelar</Button>
            <Button onClick={props.onSubmit} color="primary" variant="contained" disableElevation>
              Instalar
            </Button>
          </>
        )}
        {props.platform === platforms.IDEVICE && (
          <DialogActionWithInstructions
            action1={
              <>
                Toca el botón de compartir:
                <IOSShareIcon />
              </>
            }
            action2="luego busque y toque en 'Agregar a la pantalla de inicio'"
            onSubmit={props.onSubmit}
          />
        )}
        {props.platform === platforms.FIREFOX && (
          <DialogActionWithInstructions
            action1={
              <>
                Toque este icono en la barra de direcciones:
                <FireFoxA2HSIcon />
              </>
            }
            action2="luego toque '+ Agregar a la pantalla de inicio'"
            onSubmit={props.onSubmit}
          />
        )}
        {props.platform === platforms.FIREFOX_NEW && (
          <DialogActionWithInstructions
            action1={
              <>
                Toque el botón de menú:
                <MenuIcon />
              </>
            }
            action2="luego toque 'Instalar'"
            onSubmit={props.onSubmit}
          />
        )}
        {props.platform === platforms.OPERA && (
          <DialogActionWithInstructions
            action1={
              <>
                Toque el botón de menú:
                <MenuIcon />
              </>
            }
            action2={
              <>
                Luego toque &nbsp;'
                <OperaA2HSIcon />
                Pantalla de inicio'
              </>
            }
            onSubmit={props.onSubmit}
          />
        )}
        {props.platform === platforms.OTHER && (
          <Box width="100%" display="flex" flexDirection="column">
            <Box>Lamentablemente, la función de instalación no es compatible con su navegador.</Box>
            <Box width="100%" textAlign="right">
              <Button onClick={props.onClose}>Ok</Button>
            </Box>
          </Box>
        )}
      </DialogActions>
    </>
  );
}
