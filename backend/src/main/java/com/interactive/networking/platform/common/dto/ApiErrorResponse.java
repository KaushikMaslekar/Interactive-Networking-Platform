package com.interactive.networking.platform.common.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import io.swagger.v3.oas.annotations.media.Schema;
import java.time.Instant;
import java.util.List;

@Schema(description = "Standard API error response schema")
@JsonInclude(JsonInclude.Include.NON_NULL)
public record ApiErrorResponse(
        @Schema(description = "Indicates whether the request was successful", example = "false")
        boolean success,

        @Schema(description = "HTTP status code", example = "400")
        int status,

        @Schema(description = "Error code identifier", example = "VALIDATION_FAILED")
        String error,

        @Schema(description = "Detailed error message", example = "Validation error occurred")
        String message,

        @Schema(description = "Field validation errors, if applicable")
        List<ValidationErrorDetail> validationErrors,

        @Schema(description = "Requested URI path", example = "/api/v1/health")
        String path,

        @Schema(description = "Timestamp when error occurred")
        Instant timestamp
) {

    public static ApiErrorResponse of(int status, String error, String message, String path) {
        return new ApiErrorResponse(false, status, error, message, null, path, Instant.now());
    }

    public static ApiErrorResponse of(int status, String error, String message, List<ValidationErrorDetail> validationErrors, String path) {
        return new ApiErrorResponse(false, status, error, message, validationErrors, path, Instant.now());
    }
}
