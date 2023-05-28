import express from "express";
import { createCiudad, deleteCiudad, getAllCiudad, getCiudad, updateCiudad } from "../controllers/ciudadController.js";
import { createCategoria, deleteCategoria, getAllCategoria, getCategoria, updateCategoria } from "../controllers/categoriaController.js";
import { createHotel, deleteHotel, getAllHotel, getHotel, updateHotel } from "../controllers/hotelController.js";
import { createCategoHote, deleteCategoHote, getAllCategoHote, getCategoHote, updateCategoHote } from "../controllers/categoria_hotelController.js";
import { createTelHotel, deleteTelHotel, getAllTelHotel, getTelHotel, updateTelHotel } from "../controllers/telefono_hotelController.js";
import { createAgencia, deleteAgencia, getAgencia, getAllAgencia, updateAgencia } from "../controllers/agenciaController.js";
import { createTipHabi, deleteTipHabi, getAllTipHabi, getTipHabi, updateTipHabi } from "../controllers/tipo_habitacionController.js";
import { createHabitacion, deleteHabitacion, getAllHabitacion, getHabitacion, updateHabitacion } from "../controllers/habitacionController.js";
import { createTitular, deleteTitular, getAllTitular, getTitular, updateTitular } from "../controllers/titularController.js";
import { createTelTitul, deleteTelTitul, getAllTelTitul, getTelTitul, updateTelTitul } from "../controllers/telefono_titularController.js";
import { createAcompanante, deleteAcompanante, getAcompanante, getAllAcompanante, updateAcompanante } from "../controllers/acompananteController.js";
import { createHabiTitul, deleteHabiTitul, getAllHabiTitul, getHabiTitul, updateHabiTitul } from "../controllers/habitacion_titularController.js";
import { createResLlega, deleteResLlega, getAllResLlega, getResLlega, updateResLlega } from "../controllers/registro_llegadaController.js";
import { createRegSali, deleteRegSali, getAllRegSali, getRegSali, updateRegSali } from "../controllers/registro_salidaController.js";
import { createServicio, deleteServicio, getAllServicio, getServicio, updateServicio } from "../controllers/servicioController.js";
import { createReserva, deleteReserva, getAllReserva, getReserva, updateReserva } from "../controllers/reservaController.js";
import { createPago, deletePago, getAllPago, getPago, updatePago } from "../controllers/pagoController.js";
import { createPagoRes, deletePagoRes, getAllPagoRes, getPagoRes, updatePagoRes } from "../controllers/pago_reservaController.js";
import { createServRes, deleteServRes, getAllServRes, getServRes, updateServRes } from "../controllers/servicio_reservaController.js";
import { createUser, deleteUser, getAllUser, getUser, updateUser } from "../controllers/usuarioController.js";


const router = express.Router();

//CIUDAD
router.get('/AllCiudad',getAllCiudad);
router.get('/Ciudad/:id',getCiudad);
router.post('/creaCiu',createCiudad);
router.put('/upCiudad/:id',updateCiudad);
router.delete('/elimCiudad/:id',deleteCiudad);

//CATEGORIA 
router.get('/AllCategoria',getAllCategoria);
router.get('/Categoria/:id',getCategoria);
router.post('/creaCatego',createCategoria);
router.put('/upCatego/:id',updateCategoria);
router.delete('/elimCatego/:id',deleteCategoria);

//HOTEL 
router.get('/AllHotel',getAllHotel);
router.get('/Hotel/:id',getHotel);
router.post('/creaHotel',createHotel);
router.put('/upHotel/:id',updateHotel);
router.delete('/elimHotel/:id',deleteHotel);

//CATEGORIA_HOTEL
router.get('/AllCategHote',getAllCategoHote);
router.get('/CategHote/:id',getCategoHote);
router.post('/creaCategHote',createCategoHote);
router.put('/upCategHotel/:id',updateCategoHote);
router.delete('/elimCategHote/:id',deleteCategoHote);

//TELEFONO_HOTEL 
router.get('/AllTelHotel',getAllTelHotel);
router.get('/TelHotel/:id',getTelHotel);
router.post('/creaTelHotel',createTelHotel);
router.put('/upTelHotel/:id',updateTelHotel);//NO DEJA UPDATEAR
router.delete('/elimTelHotel/:id',deleteTelHotel);// ELIMINA TODOS LOS NUMEROS RELACIONADOS A UN HOTEL
//FUNCIONA BIEN
//AGENCIA
router.get('/AllAgencia',getAllAgencia);
router.get('/Agencia/:id',getAgencia);
router.post('/creaAgencia',createAgencia);
router.put('/upAgencia/:id',updateAgencia); 
router.delete('/elimAgencia/:id',deleteAgencia); 
//TA BIEN
//TIPO_HABITACION
router.get('/AllTipHabi',getAllTipHabi);
router.get('/TipHabi/:id',getTipHabi);
router.post('/creaTipHabi',createTipHabi);
router.put('/upTipHabi/:id',updateTipHabi);
router.delete('/elimTipHabi/:id',deleteTipHabi);
//TA BIEN
//HABITACION
router.get('/AllHabitacion',getAllHabitacion);
router.get('/Habitacion/:id',getHabitacion);
router.post('/creaHabitacion',createHabitacion);
router.put('/upHabitacion/:id',updateHabitacion);
router.delete('/elimHabitacion/:id',deleteHabitacion);
//FUNCIONA BIEN 
//TITULAR
router.get('/AllTitular',getAllTitular);
router.get('/Titular/:id',getTitular);
router.post('/creaTitular',createTitular);
router.put('/upTitular/:id',updateTitular);
router.delete('/elimTitular/:id',deleteTitular);
// HAY QUE CORREGIR.
//TELEFONO_TITULAR
router.get('/AllTelTitular',getAllTelTitul);
router.get('/TelTitular/:id',getTelTitul);
router.post('/creaTelTitular',createTelTitul);
router.put('/upTelTitular/:id',updateTelTitul); // NO deja actualizar, aparece ""llave duplicada viola restricción de unicidad «telefono_titular_pke
router.delete('/elimTelTitular/:id',deleteTelTitul); // SI SE HACE UN DELETE SE BORRAN TODOS LOS NUMEROS
//ESTA BIEN
//ACOMPANANTE
router.get('/AllAcompanante',getAllAcompanante);
router.get('/Acompanante/:id',getAcompanante);
router.post('/creaAcompanante',createAcompanante);
router.put('/upAcompanante/:id',updateAcompanante);
router.delete('/elimAcompanante/:id',deleteAcompanante);
// NO FUNCIONA, APARECE EL ERROR DE "NO EXISTE LA RELACION HABITACION TITULAR"
//HABITACION_TITULAR
router.get('/AllHabiTitul',getAllHabiTitul);
router.get('/HabiTitul/:id',getHabiTitul);
router.post('/creaHabiTitul',createHabiTitul);
router.put('/upHabiTitul/:id',updateHabiTitul);
router.delete('/elimHabiTitul/:id',deleteHabiTitul);
//ESTA BIEN
//REGISTRO_LLEGADA
router.get('/AllResLlega',getAllResLlega);
router.get('/ResLlega/:id',getResLlega);
router.post('/creaResLlega',createResLlega);
router.put('/upResLlega/:id',updateResLlega);
router.delete('/elimResLlega/:id',deleteResLlega);
//ESTA BIEN
//REGISTRO_SALIDA
router.get('/AllRegSali',getAllRegSali);
router.get('/RegSali/:id',getRegSali);
router.post('/creaRegSali',createRegSali);
router.put('/upRegSali/:id',updateRegSali);
router.delete('/elimRegSali/:id',deleteRegSali);
//YA FUNCIONA BIEN.
//SERVICIO
router.get('/AllServicio',getAllServicio);
router.get('/Servicio/:id',getServicio);
router.post('/creaServicio',createServicio);
router.put('/upServicio/:id',updateServicio);
router.delete('/elimServicio/:id',deleteServicio);
//Agregar al SQL.
//USUARIO
router.get('/AllUser',getAllUser);
router.get('/User/:id',getUser);
router.post('/creaUser',createUser);
router.put('/upUser/:id',updateUser);
router.delete('/elimUser/:id',deleteUser);
//No puedo revisarlo porque no existe la tabla user.    
//RESERVA
router.get('/AllReserva',getAllReserva);
router.get('/Reserva/:id',getReserva);
router.post('/creaReserva',createReserva);
router.put('/upReserva/:id',updateReserva);
router.delete('/elimReserva/:id',deleteReserva);
// YA ESTA LISTO.
//PAGO
router.get('/AllPago',getAllPago);
router.get('/Pago/:id',getPago);
router.post('/creaPago',createPago);
router.put('/upPago/:id',updatePago);
router.delete('/elimPago/:id',deletePago);

//PAGO_RESERVA
router.get('/AllPagoRes',getAllPagoRes); 
router.get('/PagoRes/:id',getPagoRes); 
router.post('/creaPagoRes',createPagoRes);
router.put('/upPagoRes/:id',updatePagoRes); // actualiza todas los pagos y no solo uno
router.delete('/elimPagoRes/:id',deletePagoRes);
//YA TODO SIRVE.
//SERVICIO_RESERVA
router.get('/AllServRes',getAllServRes);
router.get('/ServRes/:id',getServRes);
router.post('/creaServRes',createServRes);
router.put('/upServRes/:id',updateServRes);
router.delete('/elimServRes/:id',deleteServRes);

export default router;