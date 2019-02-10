package com.stockservce.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.stockservce.model.Stock;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class StockController {
	
	@GetMapping("/api/test/user")
	@PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
	public List<Stock> getStockList() {
		Stock s1=new Stock("RIL","Reliance");
		Stock s2=new Stock("TCS","TCS");
		Stock s3=new Stock("HDFC","HDFC");
		List sList=new ArrayList<Stock>();
		sList.add(s1);
		sList.add(s2);
		sList.add(s3);
		return sList;
	}
}