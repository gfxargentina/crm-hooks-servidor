const { gql } = require ('apollo-server');

//shema
const typeDefs = gql `
    
    type Usuario {
        id: ID
        nombre: String
        apellido: String
        email: String
        creado: String
    }

    type Token {
        token: String
    }

    type Producto {
        id: ID
        nombre: String
        existencia: Int
        precio: Float
        creado: String
    }

    type Cliente {
        id: ID
        nombre: String
        apellido: String
        empresa: String
        email: String
        telefono: String
        vendedor: ID
    }

    type Pedido {
        id: ID
        pedido: [PedidoGrupo]
        total: Float
        cliente: ID
        vendedor: ID
        fecha: String
        estado: EstadoPedido
    }

    type PedidoGrupo {
        id: ID
        cantidad: Int
        nombre: String
        precio: Float
        creado: String
        
        
    }

    type TopCliente {
        total: Float
        cliente: [Cliente]
    }

    type TopVendedor {
        total: Float
        vendedor: [Usuario]
    }

    input UsuarioInput {
        nombre: String!
        apellido: String!
        email: String!
        password: String!
    }

    input AutenticarInput {
        email: String!
        password: String!
    }

    input ProductoInput {
        nombre: String!
        existencia: Int!
        precio: Float!
    }

    input ClienteInput {
         nombre:  String!
         apellido: String!
         empresa: String!
         email: String!
         telefono: String   
    }

    input PedidoProductoInput {
        id: ID
        cantidad: Int
        nombre: String
        precio: Float
        creado: String
    }

    input PedidoInput {
        pedido: [PedidoProductoInput]
        total: Float
        cliente: ID
        estado: EstadoPedido
    }

    enum EstadoPedido {
        PENDIENTE
        COMPLETADO
        CANCELADO
    }
    
    type Query {
        #obtener todos los usuarios
        obtenerUsuario: Usuario 

        #obtener todos los productos
        obtenerProductos: [Producto]
        #obtener producto por id
        obtenerProducto(id: ID) : Producto 
        #obtener todos los clientes
        obtenerClientes: [Cliente]
        #obtener todos los clientes por vendedor 
        obtenerClientesVendedor: [Cliente] 
        #obtener solo 1 cliente
        obtenerCliente(id: ID!): Cliente  

        #pedidos
        obtenerPedidos: [Pedido]
        #obtener todos los pedidos por vendedor
        obtenerPedidosVendedor: [Pedido]
        #obtener pedido por id
        obtenerPedido(id: ID!) : Pedido
        #obtener pedidos por estado
        obtenerPedidosEstado(estado: String!) : [Pedido]

        # Busquedad Avanzadas
        mejoresClientes: [TopCliente]
        mejoresVendedores: [TopVendedor]
        buscarProducto(texto: String!) : [Producto]
    }

    type Mutation  {
        # usuarios
        nuevoUsuario(input: UsuarioInput) : Usuario
        autenticarUsuario(input: AutenticarInput) : Token

        # productos
        nuevoProducto(input: ProductoInput) : Producto
        actualizarProducto( id: ID! , input : ProductoInput ) : Producto
        eliminarProducto( id: ID! ) : String

        # clientes
        nuevoCliente(input: ClienteInput) : Cliente
        actualizarCliente(id: ID!, input: ClienteInput) : Cliente
        eliminarCliente(id: ID!) : String

        # pedidos
        nuevoPedido(input: PedidoInput) : Pedido
        actualizarPedido(id: ID!, input: PedidoInput) : Pedido
        eliminarPedido(id: ID!) : String

    }

`;



module.exports = typeDefs ;