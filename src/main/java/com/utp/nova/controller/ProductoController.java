package com.utp.nova.controller;

import com.utp.nova.model.*;
import com.utp.nova.service.*;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/productosAdmin") //@RequestMapping("/productos"),
public class ProductoController {

    private final ProductoService productoService;

    public ProductoController(ProductoService productoService) {
        this.productoService = productoService;
    }

    @GetMapping
    public String listar(Model model) {
        model.addAttribute("productos", productoService.listarProductos());
        return "producto_listado";
    }

    @GetMapping("/nuevo")
    public String formulario(Model model) {
        model.addAttribute("producto", new Producto());
        return "producto_formulario";
    }

    @PostMapping("/guardar")
    public String guardar(@ModelAttribute Producto producto) {
        productoService.agregarProducto(producto);
        return "redirect:/productosAdmin";
    }

    @GetMapping("/eliminar/{id}")
    public String eliminar(@PathVariable Long id) {
        productoService.eliminarProducto(id);
        return "redirect:/productosAdmin";
    }

    @GetMapping("/ver/{id}")
    public String ver(@PathVariable Long id, Model model) {
        var producto = productoService.buscarPorId(id).orElse(null);
        model.addAttribute("producto", producto);
        return "producto_detalle";
    }
}
