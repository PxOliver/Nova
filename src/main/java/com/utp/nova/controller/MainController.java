package com.utp.nova.controller;

import java.util.*;
import java.util.stream.Collectors;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.ui.Model;

@Controller
public class MainController {
    
    @GetMapping("/")
    public String home() {
        return "home";
    }

    @GetMapping("/productos")
    public String productos() {
        return "productos";
    }

    @GetMapping("/nosotros")
    public String nosotros() {
        return "nosotros";
    }

    @GetMapping("/contactanos")
    public String contactanos() {
        return "contactanos";
    }

    @GetMapping("/login")
    public String login() {
        return "login";
    }

    @GetMapping("/admin")
    public String admin() {
        return "admin";
    }

    @GetMapping("/ventasGra")
    public String mostrarVentas(Model model) {
        List<String> meses = Arrays.asList("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio");
        List<Integer> ventas = generarAleatorios(meses.size(), 1000, 5000);
        model.addAttribute("etiquetas", meses);
        model.addAttribute("valores", ventas);
        model.addAttribute("titulo", "Ventas Mensuales");
        return "Graficos/ventasGra";
    }

    @GetMapping("/productosGra")
    public String mostrarProductos(Model model) {
        List<String> productos = Arrays.asList("Polos", "Shorts", "Casacas", "Zapatillas", "Leggins");
        List<Integer> vendidos = generarAleatorios(productos.size(), 50, 300);
        model.addAttribute("etiquetas", productos);
        model.addAttribute("valores", vendidos);
        model.addAttribute("titulo", "Productos Más Vendidos");
        return "Graficos/productosGra";
    }

    private List<Integer> generarAleatorios(int cantidad, int min, int max) {
        Random random = new Random();
        return Arrays.asList(new Integer[cantidad]).stream()
                .map(i -> min + random.nextInt(max - min + 1))
                .collect(Collectors.toList());
    }
}
