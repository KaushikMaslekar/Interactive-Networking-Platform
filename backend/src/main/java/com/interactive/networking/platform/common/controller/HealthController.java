package com.interactive.networking.platform.common.controller;

import com.interactive.networking.platform.common.dto.ApiResponse;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import java.util.Map;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Tag(name = "System Health & Diagnostics", description = "Endpoints for platform heartbeat and diagnostic checks")
@RestController
@RequestMapping("/api/v1/health")
public class HealthController {

    @Operation(summary = "Check backend system health", description = "Returns operational status of the Spring Boot application")
    @GetMapping
    public ApiResponse<Map<String, Object>> health() {
        Map<String, Object> status = Map.of(
                "status", "UP",
                "service", "interactive-networking-backend",
                "version", "0.1.0"
        );
        return ApiResponse.ok(status, "Backend service is operational");
    }
}
