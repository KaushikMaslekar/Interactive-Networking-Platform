package com.interactive.networking.platform.common.controller;

import com.interactive.networking.platform.common.dto.ApiResponse;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import java.util.List;
import java.util.Map;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Tag(name = "Platform Information", description = "Metadata about the platform runtime and available modules")
@RestController
@RequestMapping("/api/v1/info")
public class PlatformInfoController {

    @Operation(summary = "Get platform meta-information", description = "Returns active platform modules and architectural metadata")
    @GetMapping
    public ApiResponse<Map<String, Object>> info() {
        return ApiResponse.ok(
                Map.of(
                        "name", "Interactive Networking Platform",
                        "version", "0.1.0",
                        "environment", "foundation",
                        "stack", List.of("Next.js 15", "React 19", "TypeScript", "Spring Boot 3.3.5", "Java 21", "PostgreSQL"),
                        "modules", List.of(
                                "auth", "user", "course", "module", "lesson",
                                "simulation", "lab", "quiz", "progress",
                                "achievement", "analytics", "notification", "tools", "search"
                        )
                ),
                "Platform metadata retrieved successfully"
        );
    }
}