package com.portfolio.backend.controller;

import com.portfolio.backend.entity.ContactMessage;
import com.portfolio.backend.service.ContactService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*") // Allows connectivity from React frontend
@RestController
@RequestMapping("/api/contact")
public class ContactController {
    
    private final ContactService contactService;

    @Autowired
    public ContactController(ContactService contactService) {
        this.contactService = contactService;
    }

    @PostMapping
    public ResponseEntity<?> receiveContact(@Valid @RequestBody ContactMessage message) {
        // Validation is automatically handled by @Valid. If it fails, it returns a 400 Bad Request.
        contactService.saveMessage(message);
        return ResponseEntity.ok().body("Message received and saved successfully");
    }
}
