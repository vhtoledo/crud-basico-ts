import { Request, Response } from "express"

export const getChoferes = ( req: Request, res: Response ) => {
    res.json({
        msg: 'getChoferes'
    })
} 

export const getChofer = ( req: Request, res: Response ) => {

    const { id } = req.params;

    res.json({
        msg: 'getChofer',
        id
    })
} 

export const postChofer = ( req: Request, res: Response ) => {

    const { body } = req;

    res.json({
        msg: 'postChofer',
        body
    })
} 

export const putChofer = ( req: Request, res: Response ) => {

    const { id } = req.params;
    const { body } = req;

    res.json({
        msg: 'postChofer',
        body
    })
} 

export const deleteChofer = ( req: Request, res: Response ) => {

    const { id } = req.params;

    res.json({
        msg: 'deleteChofer',
        id
    })
} 