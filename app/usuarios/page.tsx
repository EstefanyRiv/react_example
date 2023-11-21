'use client';
import customAxios from "@/utils/customAxios";
import { isAxiosError } from "axios";
import React, { useEffect, useInsertionEffect, useState } from "react";

interface ILoginResponse {
    token: string;
  }
  
  interface ILoginBody {
    username: string;
    password: string;
  }
  
  interface ICreateUsuarioResponse {
    message: string;
  }
  
  interface IUsuarioEntity {
    id: number;
    nombre: string;
    edad: number;
  }
  
  interface IUpdateUsuarioResponse {
    message: string;
    data: IUsuarioEntity;
  }

const UsuariosPage = () =>{
    const [users,setUsers] = useState<IUsuarioEntity[]>([]);

    useEffect(() =>{
        const getAllUsuarios = async () => {
            try {
              const response = await customAxios.get<IUsuarioEntity[]>('/usuario');
              console.log('Usuarios:', response.data)
              setUsers(response.data)
            } catch (error) {
              if(isAxiosError(error)){
                console.log('Error de axios', error)
              }else{
                console.log('Otro error', error)
              }
            }
          }
          getAllUsuarios()
    },[])
   
    return(
        
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Edad</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                {users.map((user) => (<tr key={user.id}>
                        <td>{user.nombre}</td>
                        <td>{user.edad}</td>
                        <td className="flex flex-row gap-2">
                            <button>Editar</button>

                            <button>Eliminar</button>
                        </td>
                      
                    </tr>))}
                    
                    
                </tbody>
                
            </table>
        
    )
}
export default UsuariosPage