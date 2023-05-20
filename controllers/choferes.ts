import { Request, Response } from "express"
import Chofer from '../models/chofer';

export const getChoferes = async ( req: Request, res: Response ) => {

    const choferes = await Chofer.findAll();

    res.json({choferes});
} 

export const getChofer = async ( req: Request, res: Response ) => {

    const { id } = req.params;

    const chofer = await Chofer.findByPk( id );

    if ( chofer ) {
        res.json(chofer);
    } else {
        res.json(404).json({
            msg: `No existe un chofer con el id ${ id }`
        });
    }

} 

export const postChofer = async ( req: Request, res: Response ) => {

    const { body } = req;

    try {

        const existeEmail = await Chofer.findOne({
            where: {
                email: body.email
            }
        })

        if (existeEmail) {
            return res.status(400).json({
                msg: 'Ya existe un usuario con el email' + body.email
            });
        }

        
    } catch (error) {
        console.log(error)
        res.json(500).json({
            msg: 'Hable con el administrador',
        })
    }

} 

export const putChofer = async ( req: Request, res: Response ) => {

    const { id } = req.params;
    const { body } = req;

    try {

        const chofer = await Chofer.findByPk( id );
        if (!chofer ) {
            return res.status(404).json({
                msg: 'No existe un chofer con el id' + id
            });
        }

        await chofer.update( body );

        res.json( chofer );

        
    } catch (error) {
        console.log(error)
        res.json(500).json({
            msg: 'Hable con el administrador',
        })
    }
} 

export const deleteChofer = async ( req: Request, res: Response ) => {

    const { id } = req.params;

    const chofer = await Chofer.findByPk( id );
    if (!chofer ) {
        return res.status(404).json({
            msg: 'No existe un chofer con el id' + id
        });
    }

    await chofer.update({ estado: false });

    // await chofer.destroy();

    res.json({
        msg: 'deleteChofer',
        id
    })
} 