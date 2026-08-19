package com.interactive.networking.platform.common.dto;

import io.swagger.v3.oas.annotations.media.Schema;

@Schema(description = "Details for specific field-level validation errors")
public record ValidationErrorDetail(
        @Schema(description = "Field name that triggered validation error", example = "email")
        String field,

        @Schema(description = "Rejected field value", example = "invalid-email")
        Object rejectedValue,

        @Schema(description = "Validation message", example = "Must be a well-formed email address")
        String message
) {}
