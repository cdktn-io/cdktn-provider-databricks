# `dataDatabricksAiGatewayModelProviderService` Submodule <a name="`dataDatabricksAiGatewayModelProviderService` Submodule" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksAiGatewayModelProviderService <a name="DataDatabricksAiGatewayModelProviderService" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service databricks_ai_gateway_model_provider_service}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAiGatewayModelProviderService(Construct Scope, string Id, DataDatabricksAiGatewayModelProviderServiceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfig">DataDatabricksAiGatewayModelProviderServiceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfig">DataDatabricksAiGatewayModelProviderServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.putProviderConfig"></a>

```csharp
private void PutProviderConfig(DataDatabricksAiGatewayModelProviderServiceProviderConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfig">DataDatabricksAiGatewayModelProviderServiceProviderConfig</a>

---

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.resetProviderConfig"></a>

```csharp
private void ResetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksAiGatewayModelProviderService resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksAiGatewayModelProviderService.IsConstruct(object X);
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksAiGatewayModelProviderService.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksAiGatewayModelProviderService.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksAiGatewayModelProviderService.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataDatabricksAiGatewayModelProviderService resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksAiGatewayModelProviderService to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksAiGatewayModelProviderService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksAiGatewayModelProviderService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.config">Config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.createdBy">CreatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.effectiveOwner">EffectiveOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.metastoreId">MetastoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.owner">Owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference">DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.updatedBy">UpdatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.providerConfigInput">ProviderConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfig">DataDatabricksAiGatewayModelProviderServiceProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.config"></a>

```csharp
public DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference Config { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference</a>

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.createdBy"></a>

```csharp
public string CreatedBy { get; }
```

- *Type:* string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveOwner`<sup>Required</sup> <a name="EffectiveOwner" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.effectiveOwner"></a>

```csharp
public string EffectiveOwner { get; }
```

- *Type:* string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `MetastoreId`<sup>Required</sup> <a name="MetastoreId" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.metastoreId"></a>

```csharp
public string MetastoreId { get; }
```

- *Type:* string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.owner"></a>

```csharp
public string Owner { get; }
```

- *Type:* string

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.providerConfig"></a>

```csharp
public DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference ProviderConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference">DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference</a>

---

##### `UpdatedBy`<sup>Required</sup> <a name="UpdatedBy" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.updatedBy"></a>

```csharp
public string UpdatedBy { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.providerConfigInput"></a>

```csharp
public IResolvable|DataDatabricksAiGatewayModelProviderServiceProviderConfig ProviderConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfig">DataDatabricksAiGatewayModelProviderServiceProviderConfig</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderService.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksAiGatewayModelProviderServiceConfig <a name="DataDatabricksAiGatewayModelProviderServiceConfig" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAiGatewayModelProviderServiceConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    DataDatabricksAiGatewayModelProviderServiceProviderConfig ProviderConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#name DataDatabricksAiGatewayModelProviderService#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfig">DataDatabricksAiGatewayModelProviderServiceProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#provider_config DataDatabricksAiGatewayModelProviderService#provider_config}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#name DataDatabricksAiGatewayModelProviderService#name}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfig.property.providerConfig"></a>

```csharp
public DataDatabricksAiGatewayModelProviderServiceProviderConfig ProviderConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfig">DataDatabricksAiGatewayModelProviderServiceProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#provider_config DataDatabricksAiGatewayModelProviderService#provider_config}.

---

### DataDatabricksAiGatewayModelProviderServiceConfigA <a name="DataDatabricksAiGatewayModelProviderServiceConfigA" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigA.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAiGatewayModelProviderServiceConfigA {
    bool|IResolvable AllowAllTargets = null,
    DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrock AmazonBedrock = null,
    DataDatabricksAiGatewayModelProviderServiceConfigAnthropic Anthropic = null,
    DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenai AzureOpenai = null,
    DataDatabricksAiGatewayModelProviderServiceConfigCustom Custom = null,
    bool|IResolvable ForwardHeaders = null,
    bool|IResolvable ForwardQueryParameters = null,
    bool|IResolvable ForwardUnmanagedPaths = null,
    DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterprise GeminiEnterprise = null,
    DataDatabricksAiGatewayModelProviderServiceConfigInferenceTable InferenceTable = null,
    DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundry MicrosoftFoundry = null,
    DataDatabricksAiGatewayModelProviderServiceConfigOpenai Openai = null,
    string ProviderType = null,
    IResolvable|DataDatabricksAiGatewayModelProviderServiceConfigRateLimits[] RateLimits = null,
    IResolvable|DataDatabricksAiGatewayModelProviderServiceConfigTargets[] Targets = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigA.property.allowAllTargets">AllowAllTargets</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#allow_all_targets DataDatabricksAiGatewayModelProviderService#allow_all_targets}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigA.property.amazonBedrock">AmazonBedrock</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrock">DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrock</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#amazon_bedrock DataDatabricksAiGatewayModelProviderService#amazon_bedrock}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigA.property.anthropic">Anthropic</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropic">DataDatabricksAiGatewayModelProviderServiceConfigAnthropic</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#anthropic DataDatabricksAiGatewayModelProviderService#anthropic}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigA.property.azureOpenai">AzureOpenai</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenai">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenai</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#azure_openai DataDatabricksAiGatewayModelProviderService#azure_openai}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigA.property.custom">Custom</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustom">DataDatabricksAiGatewayModelProviderServiceConfigCustom</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#custom DataDatabricksAiGatewayModelProviderService#custom}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigA.property.forwardHeaders">ForwardHeaders</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#forward_headers DataDatabricksAiGatewayModelProviderService#forward_headers}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigA.property.forwardQueryParameters">ForwardQueryParameters</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#forward_query_parameters DataDatabricksAiGatewayModelProviderService#forward_query_parameters}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigA.property.forwardUnmanagedPaths">ForwardUnmanagedPaths</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#forward_unmanaged_paths DataDatabricksAiGatewayModelProviderService#forward_unmanaged_paths}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigA.property.geminiEnterprise">GeminiEnterprise</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterprise">DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterprise</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#gemini_enterprise DataDatabricksAiGatewayModelProviderService#gemini_enterprise}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigA.property.inferenceTable">InferenceTable</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTable">DataDatabricksAiGatewayModelProviderServiceConfigInferenceTable</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#inference_table DataDatabricksAiGatewayModelProviderService#inference_table}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigA.property.microsoftFoundry">MicrosoftFoundry</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundry">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundry</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#microsoft_foundry DataDatabricksAiGatewayModelProviderService#microsoft_foundry}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigA.property.openai">Openai</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenai">DataDatabricksAiGatewayModelProviderServiceConfigOpenai</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#openai DataDatabricksAiGatewayModelProviderService#openai}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigA.property.providerType">ProviderType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#provider_type DataDatabricksAiGatewayModelProviderService#provider_type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigA.property.rateLimits">RateLimits</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimits">DataDatabricksAiGatewayModelProviderServiceConfigRateLimits</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#rate_limits DataDatabricksAiGatewayModelProviderService#rate_limits}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigA.property.targets">Targets</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargets">DataDatabricksAiGatewayModelProviderServiceConfigTargets</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#targets DataDatabricksAiGatewayModelProviderService#targets}. |

---

##### `AllowAllTargets`<sup>Optional</sup> <a name="AllowAllTargets" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigA.property.allowAllTargets"></a>

```csharp
public bool|IResolvable AllowAllTargets { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#allow_all_targets DataDatabricksAiGatewayModelProviderService#allow_all_targets}.

---

##### `AmazonBedrock`<sup>Optional</sup> <a name="AmazonBedrock" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigA.property.amazonBedrock"></a>

```csharp
public DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrock AmazonBedrock { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrock">DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrock</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#amazon_bedrock DataDatabricksAiGatewayModelProviderService#amazon_bedrock}.

---

##### `Anthropic`<sup>Optional</sup> <a name="Anthropic" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigA.property.anthropic"></a>

```csharp
public DataDatabricksAiGatewayModelProviderServiceConfigAnthropic Anthropic { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropic">DataDatabricksAiGatewayModelProviderServiceConfigAnthropic</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#anthropic DataDatabricksAiGatewayModelProviderService#anthropic}.

---

##### `AzureOpenai`<sup>Optional</sup> <a name="AzureOpenai" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigA.property.azureOpenai"></a>

```csharp
public DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenai AzureOpenai { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenai">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenai</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#azure_openai DataDatabricksAiGatewayModelProviderService#azure_openai}.

---

##### `Custom`<sup>Optional</sup> <a name="Custom" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigA.property.custom"></a>

```csharp
public DataDatabricksAiGatewayModelProviderServiceConfigCustom Custom { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustom">DataDatabricksAiGatewayModelProviderServiceConfigCustom</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#custom DataDatabricksAiGatewayModelProviderService#custom}.

---

##### `ForwardHeaders`<sup>Optional</sup> <a name="ForwardHeaders" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigA.property.forwardHeaders"></a>

```csharp
public bool|IResolvable ForwardHeaders { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#forward_headers DataDatabricksAiGatewayModelProviderService#forward_headers}.

---

##### `ForwardQueryParameters`<sup>Optional</sup> <a name="ForwardQueryParameters" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigA.property.forwardQueryParameters"></a>

```csharp
public bool|IResolvable ForwardQueryParameters { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#forward_query_parameters DataDatabricksAiGatewayModelProviderService#forward_query_parameters}.

---

##### `ForwardUnmanagedPaths`<sup>Optional</sup> <a name="ForwardUnmanagedPaths" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigA.property.forwardUnmanagedPaths"></a>

```csharp
public bool|IResolvable ForwardUnmanagedPaths { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#forward_unmanaged_paths DataDatabricksAiGatewayModelProviderService#forward_unmanaged_paths}.

---

##### `GeminiEnterprise`<sup>Optional</sup> <a name="GeminiEnterprise" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigA.property.geminiEnterprise"></a>

```csharp
public DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterprise GeminiEnterprise { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterprise">DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterprise</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#gemini_enterprise DataDatabricksAiGatewayModelProviderService#gemini_enterprise}.

---

##### `InferenceTable`<sup>Optional</sup> <a name="InferenceTable" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigA.property.inferenceTable"></a>

```csharp
public DataDatabricksAiGatewayModelProviderServiceConfigInferenceTable InferenceTable { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTable">DataDatabricksAiGatewayModelProviderServiceConfigInferenceTable</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#inference_table DataDatabricksAiGatewayModelProviderService#inference_table}.

---

##### `MicrosoftFoundry`<sup>Optional</sup> <a name="MicrosoftFoundry" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigA.property.microsoftFoundry"></a>

```csharp
public DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundry MicrosoftFoundry { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundry">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundry</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#microsoft_foundry DataDatabricksAiGatewayModelProviderService#microsoft_foundry}.

---

##### `Openai`<sup>Optional</sup> <a name="Openai" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigA.property.openai"></a>

```csharp
public DataDatabricksAiGatewayModelProviderServiceConfigOpenai Openai { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenai">DataDatabricksAiGatewayModelProviderServiceConfigOpenai</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#openai DataDatabricksAiGatewayModelProviderService#openai}.

---

##### `ProviderType`<sup>Optional</sup> <a name="ProviderType" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigA.property.providerType"></a>

```csharp
public string ProviderType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#provider_type DataDatabricksAiGatewayModelProviderService#provider_type}.

---

##### `RateLimits`<sup>Optional</sup> <a name="RateLimits" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigA.property.rateLimits"></a>

```csharp
public IResolvable|DataDatabricksAiGatewayModelProviderServiceConfigRateLimits[] RateLimits { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimits">DataDatabricksAiGatewayModelProviderServiceConfigRateLimits</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#rate_limits DataDatabricksAiGatewayModelProviderService#rate_limits}.

---

##### `Targets`<sup>Optional</sup> <a name="Targets" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigA.property.targets"></a>

```csharp
public IResolvable|DataDatabricksAiGatewayModelProviderServiceConfigTargets[] Targets { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargets">DataDatabricksAiGatewayModelProviderServiceConfigTargets</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#targets DataDatabricksAiGatewayModelProviderService#targets}.

---

### DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrock <a name="DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrock" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrock"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrock.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrock {
    DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirect Direct = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrock.property.direct">Direct</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirect">DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirect</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#direct DataDatabricksAiGatewayModelProviderService#direct}. |

---

##### `Direct`<sup>Optional</sup> <a name="Direct" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrock.property.direct"></a>

```csharp
public DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirect Direct { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirect">DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirect</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#direct DataDatabricksAiGatewayModelProviderService#direct}.

---

### DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirect <a name="DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirect" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirect"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirect.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirect {
    DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey AwsAccessKey = null,
    string Region = null,
    DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential ServiceCredential = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirect.property.awsAccessKey">AwsAccessKey</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey">DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#aws_access_key DataDatabricksAiGatewayModelProviderService#aws_access_key}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirect.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#region DataDatabricksAiGatewayModelProviderService#region}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirect.property.serviceCredential">ServiceCredential</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential">DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#service_credential DataDatabricksAiGatewayModelProviderService#service_credential}. |

---

##### `AwsAccessKey`<sup>Optional</sup> <a name="AwsAccessKey" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirect.property.awsAccessKey"></a>

```csharp
public DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey AwsAccessKey { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey">DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#aws_access_key DataDatabricksAiGatewayModelProviderService#aws_access_key}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirect.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#region DataDatabricksAiGatewayModelProviderService#region}.

---

##### `ServiceCredential`<sup>Optional</sup> <a name="ServiceCredential" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirect.property.serviceCredential"></a>

```csharp
public DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential ServiceCredential { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential">DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#service_credential DataDatabricksAiGatewayModelProviderService#service_credential}.

---

### DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey <a name="DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey {
    string AccessKeyId = null,
    DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey SecretAccessKey = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey.property.accessKeyId">AccessKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#access_key_id DataDatabricksAiGatewayModelProviderService#access_key_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey.property.secretAccessKey">SecretAccessKey</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey">DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#secret_access_key DataDatabricksAiGatewayModelProviderService#secret_access_key}. |

---

##### `AccessKeyId`<sup>Optional</sup> <a name="AccessKeyId" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey.property.accessKeyId"></a>

```csharp
public string AccessKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#access_key_id DataDatabricksAiGatewayModelProviderService#access_key_id}.

---

##### `SecretAccessKey`<sup>Optional</sup> <a name="SecretAccessKey" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey.property.secretAccessKey"></a>

```csharp
public DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey SecretAccessKey { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey">DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#secret_access_key DataDatabricksAiGatewayModelProviderService#secret_access_key}.

---

### DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey <a name="DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey {
    string Plaintext = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey.property.plaintext">Plaintext</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#plaintext DataDatabricksAiGatewayModelProviderService#plaintext}. |

---

##### `Plaintext`<sup>Optional</sup> <a name="Plaintext" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey.property.plaintext"></a>

```csharp
public string Plaintext { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#plaintext DataDatabricksAiGatewayModelProviderService#plaintext}.

---

### DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential <a name="DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential {
    string Name
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#name DataDatabricksAiGatewayModelProviderService#name}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#name DataDatabricksAiGatewayModelProviderService#name}.

---

### DataDatabricksAiGatewayModelProviderServiceConfigAnthropic <a name="DataDatabricksAiGatewayModelProviderServiceConfigAnthropic" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropic"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropic.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAiGatewayModelProviderServiceConfigAnthropic {
    DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirect Direct = null,
    DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayed Relayed = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropic.property.direct">Direct</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirect">DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirect</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#direct DataDatabricksAiGatewayModelProviderService#direct}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropic.property.relayed">Relayed</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayed">DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayed</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#relayed DataDatabricksAiGatewayModelProviderService#relayed}. |

---

##### `Direct`<sup>Optional</sup> <a name="Direct" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropic.property.direct"></a>

```csharp
public DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirect Direct { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirect">DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirect</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#direct DataDatabricksAiGatewayModelProviderService#direct}.

---

##### `Relayed`<sup>Optional</sup> <a name="Relayed" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropic.property.relayed"></a>

```csharp
public DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayed Relayed { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayed">DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayed</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#relayed DataDatabricksAiGatewayModelProviderService#relayed}.

---

### DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirect <a name="DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirect" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirect"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirect.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirect {
    DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKey ApiKey = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirect.property.apiKey">ApiKey</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKey">DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKey</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#api_key DataDatabricksAiGatewayModelProviderService#api_key}. |

---

##### `ApiKey`<sup>Optional</sup> <a name="ApiKey" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirect.property.apiKey"></a>

```csharp
public DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKey ApiKey { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKey">DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKey</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#api_key DataDatabricksAiGatewayModelProviderService#api_key}.

---

### DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKey <a name="DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKey" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKey.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKey {
    string Plaintext = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKey.property.plaintext">Plaintext</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#plaintext DataDatabricksAiGatewayModelProviderService#plaintext}. |

---

##### `Plaintext`<sup>Optional</sup> <a name="Plaintext" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKey.property.plaintext"></a>

```csharp
public string Plaintext { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#plaintext DataDatabricksAiGatewayModelProviderService#plaintext}.

---

### DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayed <a name="DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayed" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayed"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayed.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayed {
    string PlanType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayed.property.planType">PlanType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#plan_type DataDatabricksAiGatewayModelProviderService#plan_type}. |

---

##### `PlanType`<sup>Optional</sup> <a name="PlanType" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayed.property.planType"></a>

```csharp
public string PlanType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#plan_type DataDatabricksAiGatewayModelProviderService#plan_type}.

---

### DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenai <a name="DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenai" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenai"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenai.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenai {
    DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirect Direct = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenai.property.direct">Direct</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirect">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirect</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#direct DataDatabricksAiGatewayModelProviderService#direct}. |

---

##### `Direct`<sup>Optional</sup> <a name="Direct" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenai.property.direct"></a>

```csharp
public DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirect Direct { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirect">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirect</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#direct DataDatabricksAiGatewayModelProviderService#direct}.

---

### DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirect <a name="DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirect" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirect"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirect.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirect {
    DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey ApiKey = null,
    string BaseUrl = null,
    DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal EntraServicePrincipal = null,
    DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential ServiceCredential = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirect.property.apiKey">ApiKey</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#api_key DataDatabricksAiGatewayModelProviderService#api_key}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirect.property.baseUrl">BaseUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#base_url DataDatabricksAiGatewayModelProviderService#base_url}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirect.property.entraServicePrincipal">EntraServicePrincipal</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#entra_service_principal DataDatabricksAiGatewayModelProviderService#entra_service_principal}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirect.property.serviceCredential">ServiceCredential</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#service_credential DataDatabricksAiGatewayModelProviderService#service_credential}. |

---

##### `ApiKey`<sup>Optional</sup> <a name="ApiKey" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirect.property.apiKey"></a>

```csharp
public DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey ApiKey { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#api_key DataDatabricksAiGatewayModelProviderService#api_key}.

---

##### `BaseUrl`<sup>Optional</sup> <a name="BaseUrl" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirect.property.baseUrl"></a>

```csharp
public string BaseUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#base_url DataDatabricksAiGatewayModelProviderService#base_url}.

---

##### `EntraServicePrincipal`<sup>Optional</sup> <a name="EntraServicePrincipal" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirect.property.entraServicePrincipal"></a>

```csharp
public DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal EntraServicePrincipal { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#entra_service_principal DataDatabricksAiGatewayModelProviderService#entra_service_principal}.

---

##### `ServiceCredential`<sup>Optional</sup> <a name="ServiceCredential" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirect.property.serviceCredential"></a>

```csharp
public DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential ServiceCredential { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#service_credential DataDatabricksAiGatewayModelProviderService#service_credential}.

---

### DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey <a name="DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey {
    string Plaintext = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey.property.plaintext">Plaintext</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#plaintext DataDatabricksAiGatewayModelProviderService#plaintext}. |

---

##### `Plaintext`<sup>Optional</sup> <a name="Plaintext" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey.property.plaintext"></a>

```csharp
public string Plaintext { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#plaintext DataDatabricksAiGatewayModelProviderService#plaintext}.

---

### DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal <a name="DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal {
    string ClientId = null,
    DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret ClientSecret = null,
    string TenantId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal.property.clientId">ClientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#client_id DataDatabricksAiGatewayModelProviderService#client_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal.property.clientSecret">ClientSecret</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#client_secret DataDatabricksAiGatewayModelProviderService#client_secret}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal.property.tenantId">TenantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#tenant_id DataDatabricksAiGatewayModelProviderService#tenant_id}. |

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#client_id DataDatabricksAiGatewayModelProviderService#client_id}.

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal.property.clientSecret"></a>

```csharp
public DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret ClientSecret { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#client_secret DataDatabricksAiGatewayModelProviderService#client_secret}.

---

##### `TenantId`<sup>Optional</sup> <a name="TenantId" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal.property.tenantId"></a>

```csharp
public string TenantId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#tenant_id DataDatabricksAiGatewayModelProviderService#tenant_id}.

---

### DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret <a name="DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret {
    string Plaintext = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret.property.plaintext">Plaintext</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#plaintext DataDatabricksAiGatewayModelProviderService#plaintext}. |

---

##### `Plaintext`<sup>Optional</sup> <a name="Plaintext" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret.property.plaintext"></a>

```csharp
public string Plaintext { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#plaintext DataDatabricksAiGatewayModelProviderService#plaintext}.

---

### DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential <a name="DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential {
    string Name
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#name DataDatabricksAiGatewayModelProviderService#name}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#name DataDatabricksAiGatewayModelProviderService#name}.

---

### DataDatabricksAiGatewayModelProviderServiceConfigCustom <a name="DataDatabricksAiGatewayModelProviderServiceConfigCustom" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustom"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustom.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAiGatewayModelProviderServiceConfigCustom {
    DataDatabricksAiGatewayModelProviderServiceConfigCustomDirect Direct = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustom.property.direct">Direct</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirect">DataDatabricksAiGatewayModelProviderServiceConfigCustomDirect</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#direct DataDatabricksAiGatewayModelProviderService#direct}. |

---

##### `Direct`<sup>Optional</sup> <a name="Direct" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustom.property.direct"></a>

```csharp
public DataDatabricksAiGatewayModelProviderServiceConfigCustomDirect Direct { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirect">DataDatabricksAiGatewayModelProviderServiceConfigCustomDirect</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#direct DataDatabricksAiGatewayModelProviderService#direct}.

---

### DataDatabricksAiGatewayModelProviderServiceConfigCustomDirect <a name="DataDatabricksAiGatewayModelProviderServiceConfigCustomDirect" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirect"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirect.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAiGatewayModelProviderServiceConfigCustomDirect {
    DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKey ApiKey = null,
    string BaseUrl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirect.property.apiKey">ApiKey</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKey">DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKey</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#api_key DataDatabricksAiGatewayModelProviderService#api_key}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirect.property.baseUrl">BaseUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#base_url DataDatabricksAiGatewayModelProviderService#base_url}. |

---

##### `ApiKey`<sup>Optional</sup> <a name="ApiKey" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirect.property.apiKey"></a>

```csharp
public DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKey ApiKey { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKey">DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKey</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#api_key DataDatabricksAiGatewayModelProviderService#api_key}.

---

##### `BaseUrl`<sup>Optional</sup> <a name="BaseUrl" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirect.property.baseUrl"></a>

```csharp
public string BaseUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#base_url DataDatabricksAiGatewayModelProviderService#base_url}.

---

### DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKey <a name="DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKey" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKey.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKey {
    string Plaintext = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKey.property.plaintext">Plaintext</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#plaintext DataDatabricksAiGatewayModelProviderService#plaintext}. |

---

##### `Plaintext`<sup>Optional</sup> <a name="Plaintext" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKey.property.plaintext"></a>

```csharp
public string Plaintext { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#plaintext DataDatabricksAiGatewayModelProviderService#plaintext}.

---

### DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterprise <a name="DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterprise" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterprise"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterprise.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterprise {
    DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirect Direct = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterprise.property.direct">Direct</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirect">DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirect</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#direct DataDatabricksAiGatewayModelProviderService#direct}. |

---

##### `Direct`<sup>Optional</sup> <a name="Direct" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterprise.property.direct"></a>

```csharp
public DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirect Direct { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirect">DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirect</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#direct DataDatabricksAiGatewayModelProviderService#direct}.

---

### DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirect <a name="DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirect" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirect"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirect.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirect {
    DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey ApiKey = null,
    string ProjectId = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirect.property.apiKey">ApiKey</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey">DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#api_key DataDatabricksAiGatewayModelProviderService#api_key}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirect.property.projectId">ProjectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#project_id DataDatabricksAiGatewayModelProviderService#project_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirect.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#region DataDatabricksAiGatewayModelProviderService#region}. |

---

##### `ApiKey`<sup>Optional</sup> <a name="ApiKey" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirect.property.apiKey"></a>

```csharp
public DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey ApiKey { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey">DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#api_key DataDatabricksAiGatewayModelProviderService#api_key}.

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirect.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#project_id DataDatabricksAiGatewayModelProviderService#project_id}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirect.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#region DataDatabricksAiGatewayModelProviderService#region}.

---

### DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey <a name="DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey {
    string Plaintext = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey.property.plaintext">Plaintext</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#plaintext DataDatabricksAiGatewayModelProviderService#plaintext}. |

---

##### `Plaintext`<sup>Optional</sup> <a name="Plaintext" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey.property.plaintext"></a>

```csharp
public string Plaintext { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#plaintext DataDatabricksAiGatewayModelProviderService#plaintext}.

---

### DataDatabricksAiGatewayModelProviderServiceConfigInferenceTable <a name="DataDatabricksAiGatewayModelProviderServiceConfigInferenceTable" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTable.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAiGatewayModelProviderServiceConfigInferenceTable {
    string Parent,
    bool|IResolvable Disabled = null,
    string TableNamePrefix = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTable.property.parent">Parent</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#parent DataDatabricksAiGatewayModelProviderService#parent}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTable.property.disabled">Disabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#disabled DataDatabricksAiGatewayModelProviderService#disabled}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTable.property.tableNamePrefix">TableNamePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#table_name_prefix DataDatabricksAiGatewayModelProviderService#table_name_prefix}. |

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTable.property.parent"></a>

```csharp
public string Parent { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#parent DataDatabricksAiGatewayModelProviderService#parent}.

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTable.property.disabled"></a>

```csharp
public bool|IResolvable Disabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#disabled DataDatabricksAiGatewayModelProviderService#disabled}.

---

##### `TableNamePrefix`<sup>Optional</sup> <a name="TableNamePrefix" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTable.property.tableNamePrefix"></a>

```csharp
public string TableNamePrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#table_name_prefix DataDatabricksAiGatewayModelProviderService#table_name_prefix}.

---

### DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundry <a name="DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundry" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundry"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundry.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundry {
    DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirect Direct = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundry.property.direct">Direct</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirect">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirect</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#direct DataDatabricksAiGatewayModelProviderService#direct}. |

---

##### `Direct`<sup>Optional</sup> <a name="Direct" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundry.property.direct"></a>

```csharp
public DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirect Direct { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirect">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirect</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#direct DataDatabricksAiGatewayModelProviderService#direct}.

---

### DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirect <a name="DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirect" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirect"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirect.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirect {
    DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey ApiKey = null,
    string BaseUrl = null,
    DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal EntraServicePrincipal = null,
    DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential ServiceCredential = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirect.property.apiKey">ApiKey</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#api_key DataDatabricksAiGatewayModelProviderService#api_key}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirect.property.baseUrl">BaseUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#base_url DataDatabricksAiGatewayModelProviderService#base_url}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirect.property.entraServicePrincipal">EntraServicePrincipal</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#entra_service_principal DataDatabricksAiGatewayModelProviderService#entra_service_principal}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirect.property.serviceCredential">ServiceCredential</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#service_credential DataDatabricksAiGatewayModelProviderService#service_credential}. |

---

##### `ApiKey`<sup>Optional</sup> <a name="ApiKey" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirect.property.apiKey"></a>

```csharp
public DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey ApiKey { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#api_key DataDatabricksAiGatewayModelProviderService#api_key}.

---

##### `BaseUrl`<sup>Optional</sup> <a name="BaseUrl" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirect.property.baseUrl"></a>

```csharp
public string BaseUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#base_url DataDatabricksAiGatewayModelProviderService#base_url}.

---

##### `EntraServicePrincipal`<sup>Optional</sup> <a name="EntraServicePrincipal" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirect.property.entraServicePrincipal"></a>

```csharp
public DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal EntraServicePrincipal { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#entra_service_principal DataDatabricksAiGatewayModelProviderService#entra_service_principal}.

---

##### `ServiceCredential`<sup>Optional</sup> <a name="ServiceCredential" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirect.property.serviceCredential"></a>

```csharp
public DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential ServiceCredential { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#service_credential DataDatabricksAiGatewayModelProviderService#service_credential}.

---

### DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey <a name="DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey {
    string Plaintext = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey.property.plaintext">Plaintext</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#plaintext DataDatabricksAiGatewayModelProviderService#plaintext}. |

---

##### `Plaintext`<sup>Optional</sup> <a name="Plaintext" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey.property.plaintext"></a>

```csharp
public string Plaintext { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#plaintext DataDatabricksAiGatewayModelProviderService#plaintext}.

---

### DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal <a name="DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal {
    string ClientId = null,
    DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret ClientSecret = null,
    string TenantId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal.property.clientId">ClientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#client_id DataDatabricksAiGatewayModelProviderService#client_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal.property.clientSecret">ClientSecret</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#client_secret DataDatabricksAiGatewayModelProviderService#client_secret}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal.property.tenantId">TenantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#tenant_id DataDatabricksAiGatewayModelProviderService#tenant_id}. |

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#client_id DataDatabricksAiGatewayModelProviderService#client_id}.

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal.property.clientSecret"></a>

```csharp
public DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret ClientSecret { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#client_secret DataDatabricksAiGatewayModelProviderService#client_secret}.

---

##### `TenantId`<sup>Optional</sup> <a name="TenantId" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal.property.tenantId"></a>

```csharp
public string TenantId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#tenant_id DataDatabricksAiGatewayModelProviderService#tenant_id}.

---

### DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret <a name="DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret {
    string Plaintext = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret.property.plaintext">Plaintext</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#plaintext DataDatabricksAiGatewayModelProviderService#plaintext}. |

---

##### `Plaintext`<sup>Optional</sup> <a name="Plaintext" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret.property.plaintext"></a>

```csharp
public string Plaintext { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#plaintext DataDatabricksAiGatewayModelProviderService#plaintext}.

---

### DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential <a name="DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential {
    string Name
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#name DataDatabricksAiGatewayModelProviderService#name}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#name DataDatabricksAiGatewayModelProviderService#name}.

---

### DataDatabricksAiGatewayModelProviderServiceConfigOpenai <a name="DataDatabricksAiGatewayModelProviderServiceConfigOpenai" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenai"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenai.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAiGatewayModelProviderServiceConfigOpenai {
    DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirect Direct = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenai.property.direct">Direct</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirect">DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirect</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#direct DataDatabricksAiGatewayModelProviderService#direct}. |

---

##### `Direct`<sup>Optional</sup> <a name="Direct" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenai.property.direct"></a>

```csharp
public DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirect Direct { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirect">DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirect</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#direct DataDatabricksAiGatewayModelProviderService#direct}.

---

### DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirect <a name="DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirect" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirect"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirect.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirect {
    DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKey ApiKey = null,
    string BaseUrl = null,
    string Organization = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirect.property.apiKey">ApiKey</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKey">DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKey</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#api_key DataDatabricksAiGatewayModelProviderService#api_key}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirect.property.baseUrl">BaseUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#base_url DataDatabricksAiGatewayModelProviderService#base_url}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirect.property.organization">Organization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#organization DataDatabricksAiGatewayModelProviderService#organization}. |

---

##### `ApiKey`<sup>Optional</sup> <a name="ApiKey" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirect.property.apiKey"></a>

```csharp
public DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKey ApiKey { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKey">DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKey</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#api_key DataDatabricksAiGatewayModelProviderService#api_key}.

---

##### `BaseUrl`<sup>Optional</sup> <a name="BaseUrl" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirect.property.baseUrl"></a>

```csharp
public string BaseUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#base_url DataDatabricksAiGatewayModelProviderService#base_url}.

---

##### `Organization`<sup>Optional</sup> <a name="Organization" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirect.property.organization"></a>

```csharp
public string Organization { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#organization DataDatabricksAiGatewayModelProviderService#organization}.

---

### DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKey <a name="DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKey" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKey.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKey {
    string Plaintext = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKey.property.plaintext">Plaintext</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#plaintext DataDatabricksAiGatewayModelProviderService#plaintext}. |

---

##### `Plaintext`<sup>Optional</sup> <a name="Plaintext" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKey.property.plaintext"></a>

```csharp
public string Plaintext { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#plaintext DataDatabricksAiGatewayModelProviderService#plaintext}.

---

### DataDatabricksAiGatewayModelProviderServiceConfigRateLimits <a name="DataDatabricksAiGatewayModelProviderServiceConfigRateLimits" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimits"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimits.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAiGatewayModelProviderServiceConfigRateLimits {
    string Key,
    string RenewalPeriod,
    string Principal = null,
    double Requests = null,
    string RequestTagKey = null,
    string RequestTagValue = null,
    double Tokens = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimits.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#key DataDatabricksAiGatewayModelProviderService#key}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimits.property.renewalPeriod">RenewalPeriod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#renewal_period DataDatabricksAiGatewayModelProviderService#renewal_period}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimits.property.principal">Principal</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#principal DataDatabricksAiGatewayModelProviderService#principal}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimits.property.requests">Requests</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#requests DataDatabricksAiGatewayModelProviderService#requests}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimits.property.requestTagKey">RequestTagKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#request_tag_key DataDatabricksAiGatewayModelProviderService#request_tag_key}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimits.property.requestTagValue">RequestTagValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#request_tag_value DataDatabricksAiGatewayModelProviderService#request_tag_value}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimits.property.tokens">Tokens</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#tokens DataDatabricksAiGatewayModelProviderService#tokens}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimits.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#key DataDatabricksAiGatewayModelProviderService#key}.

---

##### `RenewalPeriod`<sup>Required</sup> <a name="RenewalPeriod" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimits.property.renewalPeriod"></a>

```csharp
public string RenewalPeriod { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#renewal_period DataDatabricksAiGatewayModelProviderService#renewal_period}.

---

##### `Principal`<sup>Optional</sup> <a name="Principal" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimits.property.principal"></a>

```csharp
public string Principal { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#principal DataDatabricksAiGatewayModelProviderService#principal}.

---

##### `Requests`<sup>Optional</sup> <a name="Requests" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimits.property.requests"></a>

```csharp
public double Requests { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#requests DataDatabricksAiGatewayModelProviderService#requests}.

---

##### `RequestTagKey`<sup>Optional</sup> <a name="RequestTagKey" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimits.property.requestTagKey"></a>

```csharp
public string RequestTagKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#request_tag_key DataDatabricksAiGatewayModelProviderService#request_tag_key}.

---

##### `RequestTagValue`<sup>Optional</sup> <a name="RequestTagValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimits.property.requestTagValue"></a>

```csharp
public string RequestTagValue { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#request_tag_value DataDatabricksAiGatewayModelProviderService#request_tag_value}.

---

##### `Tokens`<sup>Optional</sup> <a name="Tokens" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimits.property.tokens"></a>

```csharp
public double Tokens { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#tokens DataDatabricksAiGatewayModelProviderService#tokens}.

---

### DataDatabricksAiGatewayModelProviderServiceConfigTargets <a name="DataDatabricksAiGatewayModelProviderServiceConfigTargets" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargets.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAiGatewayModelProviderServiceConfigTargets {
    string Model,
    string[] NativeApiTypes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargets.property.model">Model</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#model DataDatabricksAiGatewayModelProviderService#model}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargets.property.nativeApiTypes">NativeApiTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#native_api_types DataDatabricksAiGatewayModelProviderService#native_api_types}. |

---

##### `Model`<sup>Required</sup> <a name="Model" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargets.property.model"></a>

```csharp
public string Model { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#model DataDatabricksAiGatewayModelProviderService#model}.

---

##### `NativeApiTypes`<sup>Optional</sup> <a name="NativeApiTypes" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargets.property.nativeApiTypes"></a>

```csharp
public string[] NativeApiTypes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#native_api_types DataDatabricksAiGatewayModelProviderService#native_api_types}.

---

### DataDatabricksAiGatewayModelProviderServiceProviderConfig <a name="DataDatabricksAiGatewayModelProviderServiceProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAiGatewayModelProviderServiceProviderConfig {
    string WorkspaceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#workspace_id DataDatabricksAiGatewayModelProviderService#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_model_provider_service#workspace_id DataDatabricksAiGatewayModelProviderService#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference <a name="DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.putSecretAccessKey">PutSecretAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.resetAccessKeyId">ResetAccessKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.resetSecretAccessKey">ResetSecretAccessKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSecretAccessKey` <a name="PutSecretAccessKey" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.putSecretAccessKey"></a>

```csharp
private void PutSecretAccessKey(DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.putSecretAccessKey.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey">DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey</a>

---

##### `ResetAccessKeyId` <a name="ResetAccessKeyId" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.resetAccessKeyId"></a>

```csharp
private void ResetAccessKeyId()
```

##### `ResetSecretAccessKey` <a name="ResetSecretAccessKey" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.resetSecretAccessKey"></a>

```csharp
private void ResetSecretAccessKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.property.secretAccessKey">SecretAccessKey</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.property.accessKeyIdInput">AccessKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.property.secretAccessKeyInput">SecretAccessKeyInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey">DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.property.accessKeyId">AccessKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey">DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecretAccessKey`<sup>Required</sup> <a name="SecretAccessKey" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.property.secretAccessKey"></a>

```csharp
public DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference SecretAccessKey { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference</a>

---

##### `AccessKeyIdInput`<sup>Optional</sup> <a name="AccessKeyIdInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.property.accessKeyIdInput"></a>

```csharp
public string AccessKeyIdInput { get; }
```

- *Type:* string

---

##### `SecretAccessKeyInput`<sup>Optional</sup> <a name="SecretAccessKeyInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.property.secretAccessKeyInput"></a>

```csharp
public IResolvable|DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey SecretAccessKeyInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey">DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey</a>

---

##### `AccessKeyId`<sup>Required</sup> <a name="AccessKeyId" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.property.accessKeyId"></a>

```csharp
public string AccessKeyId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey">DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey</a>

---


### DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference <a name="DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.resetPlaintext">ResetPlaintext</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPlaintext` <a name="ResetPlaintext" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.resetPlaintext"></a>

```csharp
private void ResetPlaintext()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.property.plaintextInput">PlaintextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.property.plaintext">Plaintext</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey">DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PlaintextInput`<sup>Optional</sup> <a name="PlaintextInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.property.plaintextInput"></a>

```csharp
public string PlaintextInput { get; }
```

- *Type:* string

---

##### `Plaintext`<sup>Required</sup> <a name="Plaintext" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.property.plaintext"></a>

```csharp
public string Plaintext { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKeyOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey">DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeySecretAccessKey</a>

---


### DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference <a name="DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.putAwsAccessKey">PutAwsAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.putServiceCredential">PutServiceCredential</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.resetAwsAccessKey">ResetAwsAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.resetServiceCredential">ResetServiceCredential</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAwsAccessKey` <a name="PutAwsAccessKey" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.putAwsAccessKey"></a>

```csharp
private void PutAwsAccessKey(DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.putAwsAccessKey.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey">DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey</a>

---

##### `PutServiceCredential` <a name="PutServiceCredential" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.putServiceCredential"></a>

```csharp
private void PutServiceCredential(DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.putServiceCredential.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential">DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential</a>

---

##### `ResetAwsAccessKey` <a name="ResetAwsAccessKey" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.resetAwsAccessKey"></a>

```csharp
private void ResetAwsAccessKey()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetServiceCredential` <a name="ResetServiceCredential" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.resetServiceCredential"></a>

```csharp
private void ResetServiceCredential()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.awsAccessKey">AwsAccessKey</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.serviceCredential">ServiceCredential</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.awsAccessKeyInput">AwsAccessKeyInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey">DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.serviceCredentialInput">ServiceCredentialInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential">DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirect">DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirect</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AwsAccessKey`<sup>Required</sup> <a name="AwsAccessKey" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.awsAccessKey"></a>

```csharp
public DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference AwsAccessKey { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKeyOutputReference</a>

---

##### `ServiceCredential`<sup>Required</sup> <a name="ServiceCredential" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.serviceCredential"></a>

```csharp
public DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference ServiceCredential { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference</a>

---

##### `AwsAccessKeyInput`<sup>Optional</sup> <a name="AwsAccessKeyInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.awsAccessKeyInput"></a>

```csharp
public IResolvable|DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey AwsAccessKeyInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey">DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectAwsAccessKey</a>

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `ServiceCredentialInput`<sup>Optional</sup> <a name="ServiceCredentialInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.serviceCredentialInput"></a>

```csharp
public IResolvable|DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential ServiceCredentialInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential">DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential</a>

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirect InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirect">DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirect</a>

---


### DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference <a name="DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential">DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredentialOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential">DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectServiceCredential</a>

---


### DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference <a name="DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.putDirect">PutDirect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.resetDirect">ResetDirect</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDirect` <a name="PutDirect" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.putDirect"></a>

```csharp
private void PutDirect(DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirect Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.putDirect.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirect">DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirect</a>

---

##### `ResetDirect` <a name="ResetDirect" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.resetDirect"></a>

```csharp
private void ResetDirect()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.property.direct">Direct</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.property.directInput">DirectInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirect">DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrock">DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrock</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Direct`<sup>Required</sup> <a name="Direct" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.property.direct"></a>

```csharp
public DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference Direct { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirectOutputReference</a>

---

##### `DirectInput`<sup>Optional</sup> <a name="DirectInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.property.directInput"></a>

```csharp
public IResolvable|DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirect DirectInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirect">DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockDirect</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrock InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrock">DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrock</a>

---


### DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference <a name="DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.resetPlaintext">ResetPlaintext</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPlaintext` <a name="ResetPlaintext" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.resetPlaintext"></a>

```csharp
private void ResetPlaintext()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.property.plaintextInput">PlaintextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.property.plaintext">Plaintext</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKey">DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PlaintextInput`<sup>Optional</sup> <a name="PlaintextInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.property.plaintextInput"></a>

```csharp
public string PlaintextInput { get; }
```

- *Type:* string

---

##### `Plaintext`<sup>Required</sup> <a name="Plaintext" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.property.plaintext"></a>

```csharp
public string Plaintext { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKey InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKey">DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKey</a>

---


### DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference <a name="DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.putApiKey">PutApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.resetApiKey">ResetApiKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApiKey` <a name="PutApiKey" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.putApiKey"></a>

```csharp
private void PutApiKey(DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKey Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.putApiKey.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKey">DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKey</a>

---

##### `ResetApiKey` <a name="ResetApiKey" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.resetApiKey"></a>

```csharp
private void ResetApiKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.property.apiKey">ApiKey</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.property.apiKeyInput">ApiKeyInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKey">DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirect">DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirect</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.property.apiKey"></a>

```csharp
public DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference ApiKey { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKeyOutputReference</a>

---

##### `ApiKeyInput`<sup>Optional</sup> <a name="ApiKeyInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.property.apiKeyInput"></a>

```csharp
public IResolvable|DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKey ApiKeyInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKey">DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectApiKey</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirect InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirect">DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirect</a>

---


### DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference <a name="DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.putDirect">PutDirect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.putRelayed">PutRelayed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.resetDirect">ResetDirect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.resetRelayed">ResetRelayed</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDirect` <a name="PutDirect" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.putDirect"></a>

```csharp
private void PutDirect(DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirect Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.putDirect.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirect">DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirect</a>

---

##### `PutRelayed` <a name="PutRelayed" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.putRelayed"></a>

```csharp
private void PutRelayed(DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayed Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.putRelayed.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayed">DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayed</a>

---

##### `ResetDirect` <a name="ResetDirect" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.resetDirect"></a>

```csharp
private void ResetDirect()
```

##### `ResetRelayed` <a name="ResetRelayed" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.resetRelayed"></a>

```csharp
private void ResetRelayed()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.property.direct">Direct</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.property.relayed">Relayed</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.property.directInput">DirectInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirect">DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.property.relayedInput">RelayedInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayed">DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropic">DataDatabricksAiGatewayModelProviderServiceConfigAnthropic</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Direct`<sup>Required</sup> <a name="Direct" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.property.direct"></a>

```csharp
public DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference Direct { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirectOutputReference</a>

---

##### `Relayed`<sup>Required</sup> <a name="Relayed" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.property.relayed"></a>

```csharp
public DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference Relayed { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference</a>

---

##### `DirectInput`<sup>Optional</sup> <a name="DirectInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.property.directInput"></a>

```csharp
public IResolvable|DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirect DirectInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirect">DataDatabricksAiGatewayModelProviderServiceConfigAnthropicDirect</a>

---

##### `RelayedInput`<sup>Optional</sup> <a name="RelayedInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.property.relayedInput"></a>

```csharp
public IResolvable|DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayed RelayedInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayed">DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayed</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAiGatewayModelProviderServiceConfigAnthropic InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropic">DataDatabricksAiGatewayModelProviderServiceConfigAnthropic</a>

---


### DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference <a name="DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.resetPlanType">ResetPlanType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPlanType` <a name="ResetPlanType" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.resetPlanType"></a>

```csharp
private void ResetPlanType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.property.planTypeInput">PlanTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.property.planType">PlanType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayed">DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayed</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PlanTypeInput`<sup>Optional</sup> <a name="PlanTypeInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.property.planTypeInput"></a>

```csharp
public string PlanTypeInput { get; }
```

- *Type:* string

---

##### `PlanType`<sup>Required</sup> <a name="PlanType" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.property.planType"></a>

```csharp
public string PlanType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayedOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayed InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayed">DataDatabricksAiGatewayModelProviderServiceConfigAnthropicRelayed</a>

---


### DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference <a name="DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.putAmazonBedrock">PutAmazonBedrock</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.putAnthropic">PutAnthropic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.putAzureOpenai">PutAzureOpenai</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.putCustom">PutCustom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.putGeminiEnterprise">PutGeminiEnterprise</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.putInferenceTable">PutInferenceTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.putMicrosoftFoundry">PutMicrosoftFoundry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.putOpenai">PutOpenai</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.putRateLimits">PutRateLimits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.putTargets">PutTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.resetAllowAllTargets">ResetAllowAllTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.resetAmazonBedrock">ResetAmazonBedrock</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.resetAnthropic">ResetAnthropic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.resetAzureOpenai">ResetAzureOpenai</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.resetCustom">ResetCustom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.resetForwardHeaders">ResetForwardHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.resetForwardQueryParameters">ResetForwardQueryParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.resetForwardUnmanagedPaths">ResetForwardUnmanagedPaths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.resetGeminiEnterprise">ResetGeminiEnterprise</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.resetInferenceTable">ResetInferenceTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.resetMicrosoftFoundry">ResetMicrosoftFoundry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.resetOpenai">ResetOpenai</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.resetProviderType">ResetProviderType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.resetRateLimits">ResetRateLimits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.resetTargets">ResetTargets</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAmazonBedrock` <a name="PutAmazonBedrock" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.putAmazonBedrock"></a>

```csharp
private void PutAmazonBedrock(DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrock Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.putAmazonBedrock.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrock">DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrock</a>

---

##### `PutAnthropic` <a name="PutAnthropic" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.putAnthropic"></a>

```csharp
private void PutAnthropic(DataDatabricksAiGatewayModelProviderServiceConfigAnthropic Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.putAnthropic.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropic">DataDatabricksAiGatewayModelProviderServiceConfigAnthropic</a>

---

##### `PutAzureOpenai` <a name="PutAzureOpenai" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.putAzureOpenai"></a>

```csharp
private void PutAzureOpenai(DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenai Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.putAzureOpenai.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenai">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenai</a>

---

##### `PutCustom` <a name="PutCustom" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.putCustom"></a>

```csharp
private void PutCustom(DataDatabricksAiGatewayModelProviderServiceConfigCustom Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.putCustom.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustom">DataDatabricksAiGatewayModelProviderServiceConfigCustom</a>

---

##### `PutGeminiEnterprise` <a name="PutGeminiEnterprise" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.putGeminiEnterprise"></a>

```csharp
private void PutGeminiEnterprise(DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterprise Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.putGeminiEnterprise.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterprise">DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterprise</a>

---

##### `PutInferenceTable` <a name="PutInferenceTable" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.putInferenceTable"></a>

```csharp
private void PutInferenceTable(DataDatabricksAiGatewayModelProviderServiceConfigInferenceTable Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.putInferenceTable.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTable">DataDatabricksAiGatewayModelProviderServiceConfigInferenceTable</a>

---

##### `PutMicrosoftFoundry` <a name="PutMicrosoftFoundry" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.putMicrosoftFoundry"></a>

```csharp
private void PutMicrosoftFoundry(DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundry Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.putMicrosoftFoundry.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundry">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundry</a>

---

##### `PutOpenai` <a name="PutOpenai" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.putOpenai"></a>

```csharp
private void PutOpenai(DataDatabricksAiGatewayModelProviderServiceConfigOpenai Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.putOpenai.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenai">DataDatabricksAiGatewayModelProviderServiceConfigOpenai</a>

---

##### `PutRateLimits` <a name="PutRateLimits" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.putRateLimits"></a>

```csharp
private void PutRateLimits(IResolvable|DataDatabricksAiGatewayModelProviderServiceConfigRateLimits[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.putRateLimits.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimits">DataDatabricksAiGatewayModelProviderServiceConfigRateLimits</a>[]

---

##### `PutTargets` <a name="PutTargets" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.putTargets"></a>

```csharp
private void PutTargets(IResolvable|DataDatabricksAiGatewayModelProviderServiceConfigTargets[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.putTargets.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargets">DataDatabricksAiGatewayModelProviderServiceConfigTargets</a>[]

---

##### `ResetAllowAllTargets` <a name="ResetAllowAllTargets" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.resetAllowAllTargets"></a>

```csharp
private void ResetAllowAllTargets()
```

##### `ResetAmazonBedrock` <a name="ResetAmazonBedrock" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.resetAmazonBedrock"></a>

```csharp
private void ResetAmazonBedrock()
```

##### `ResetAnthropic` <a name="ResetAnthropic" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.resetAnthropic"></a>

```csharp
private void ResetAnthropic()
```

##### `ResetAzureOpenai` <a name="ResetAzureOpenai" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.resetAzureOpenai"></a>

```csharp
private void ResetAzureOpenai()
```

##### `ResetCustom` <a name="ResetCustom" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.resetCustom"></a>

```csharp
private void ResetCustom()
```

##### `ResetForwardHeaders` <a name="ResetForwardHeaders" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.resetForwardHeaders"></a>

```csharp
private void ResetForwardHeaders()
```

##### `ResetForwardQueryParameters` <a name="ResetForwardQueryParameters" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.resetForwardQueryParameters"></a>

```csharp
private void ResetForwardQueryParameters()
```

##### `ResetForwardUnmanagedPaths` <a name="ResetForwardUnmanagedPaths" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.resetForwardUnmanagedPaths"></a>

```csharp
private void ResetForwardUnmanagedPaths()
```

##### `ResetGeminiEnterprise` <a name="ResetGeminiEnterprise" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.resetGeminiEnterprise"></a>

```csharp
private void ResetGeminiEnterprise()
```

##### `ResetInferenceTable` <a name="ResetInferenceTable" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.resetInferenceTable"></a>

```csharp
private void ResetInferenceTable()
```

##### `ResetMicrosoftFoundry` <a name="ResetMicrosoftFoundry" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.resetMicrosoftFoundry"></a>

```csharp
private void ResetMicrosoftFoundry()
```

##### `ResetOpenai` <a name="ResetOpenai" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.resetOpenai"></a>

```csharp
private void ResetOpenai()
```

##### `ResetProviderType` <a name="ResetProviderType" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.resetProviderType"></a>

```csharp
private void ResetProviderType()
```

##### `ResetRateLimits` <a name="ResetRateLimits" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.resetRateLimits"></a>

```csharp
private void ResetRateLimits()
```

##### `ResetTargets` <a name="ResetTargets" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.resetTargets"></a>

```csharp
private void ResetTargets()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.amazonBedrock">AmazonBedrock</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.anthropic">Anthropic</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.azureOpenai">AzureOpenai</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.custom">Custom</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.geminiEnterprise">GeminiEnterprise</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.inferenceTable">InferenceTable</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.microsoftFoundry">MicrosoftFoundry</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.openai">Openai</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.rateLimits">RateLimits</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsList">DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.targets">Targets</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsList">DataDatabricksAiGatewayModelProviderServiceConfigTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.allowAllTargetsInput">AllowAllTargetsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.amazonBedrockInput">AmazonBedrockInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrock">DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrock</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.anthropicInput">AnthropicInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropic">DataDatabricksAiGatewayModelProviderServiceConfigAnthropic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.azureOpenaiInput">AzureOpenaiInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenai">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenai</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.customInput">CustomInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustom">DataDatabricksAiGatewayModelProviderServiceConfigCustom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.forwardHeadersInput">ForwardHeadersInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.forwardQueryParametersInput">ForwardQueryParametersInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.forwardUnmanagedPathsInput">ForwardUnmanagedPathsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.geminiEnterpriseInput">GeminiEnterpriseInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterprise">DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterprise</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.inferenceTableInput">InferenceTableInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTable">DataDatabricksAiGatewayModelProviderServiceConfigInferenceTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.microsoftFoundryInput">MicrosoftFoundryInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundry">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.openaiInput">OpenaiInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenai">DataDatabricksAiGatewayModelProviderServiceConfigOpenai</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.providerTypeInput">ProviderTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.rateLimitsInput">RateLimitsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimits">DataDatabricksAiGatewayModelProviderServiceConfigRateLimits</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.targetsInput">TargetsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargets">DataDatabricksAiGatewayModelProviderServiceConfigTargets</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.allowAllTargets">AllowAllTargets</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.forwardHeaders">ForwardHeaders</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.forwardQueryParameters">ForwardQueryParameters</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.forwardUnmanagedPaths">ForwardUnmanagedPaths</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.providerType">ProviderType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigA">DataDatabricksAiGatewayModelProviderServiceConfigA</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AmazonBedrock`<sup>Required</sup> <a name="AmazonBedrock" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.amazonBedrock"></a>

```csharp
public DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference AmazonBedrock { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrockOutputReference</a>

---

##### `Anthropic`<sup>Required</sup> <a name="Anthropic" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.anthropic"></a>

```csharp
public DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference Anthropic { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigAnthropicOutputReference</a>

---

##### `AzureOpenai`<sup>Required</sup> <a name="AzureOpenai" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.azureOpenai"></a>

```csharp
public DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference AzureOpenai { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference</a>

---

##### `Custom`<sup>Required</sup> <a name="Custom" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.custom"></a>

```csharp
public DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference Custom { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference</a>

---

##### `GeminiEnterprise`<sup>Required</sup> <a name="GeminiEnterprise" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.geminiEnterprise"></a>

```csharp
public DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference GeminiEnterprise { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference</a>

---

##### `InferenceTable`<sup>Required</sup> <a name="InferenceTable" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.inferenceTable"></a>

```csharp
public DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference InferenceTable { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference</a>

---

##### `MicrosoftFoundry`<sup>Required</sup> <a name="MicrosoftFoundry" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.microsoftFoundry"></a>

```csharp
public DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference MicrosoftFoundry { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference</a>

---

##### `Openai`<sup>Required</sup> <a name="Openai" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.openai"></a>

```csharp
public DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference Openai { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference</a>

---

##### `RateLimits`<sup>Required</sup> <a name="RateLimits" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.rateLimits"></a>

```csharp
public DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsList RateLimits { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsList">DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsList</a>

---

##### `Targets`<sup>Required</sup> <a name="Targets" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.targets"></a>

```csharp
public DataDatabricksAiGatewayModelProviderServiceConfigTargetsList Targets { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsList">DataDatabricksAiGatewayModelProviderServiceConfigTargetsList</a>

---

##### `AllowAllTargetsInput`<sup>Optional</sup> <a name="AllowAllTargetsInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.allowAllTargetsInput"></a>

```csharp
public bool|IResolvable AllowAllTargetsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AmazonBedrockInput`<sup>Optional</sup> <a name="AmazonBedrockInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.amazonBedrockInput"></a>

```csharp
public IResolvable|DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrock AmazonBedrockInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrock">DataDatabricksAiGatewayModelProviderServiceConfigAmazonBedrock</a>

---

##### `AnthropicInput`<sup>Optional</sup> <a name="AnthropicInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.anthropicInput"></a>

```csharp
public IResolvable|DataDatabricksAiGatewayModelProviderServiceConfigAnthropic AnthropicInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAnthropic">DataDatabricksAiGatewayModelProviderServiceConfigAnthropic</a>

---

##### `AzureOpenaiInput`<sup>Optional</sup> <a name="AzureOpenaiInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.azureOpenaiInput"></a>

```csharp
public IResolvable|DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenai AzureOpenaiInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenai">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenai</a>

---

##### `CustomInput`<sup>Optional</sup> <a name="CustomInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.customInput"></a>

```csharp
public IResolvable|DataDatabricksAiGatewayModelProviderServiceConfigCustom CustomInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustom">DataDatabricksAiGatewayModelProviderServiceConfigCustom</a>

---

##### `ForwardHeadersInput`<sup>Optional</sup> <a name="ForwardHeadersInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.forwardHeadersInput"></a>

```csharp
public bool|IResolvable ForwardHeadersInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ForwardQueryParametersInput`<sup>Optional</sup> <a name="ForwardQueryParametersInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.forwardQueryParametersInput"></a>

```csharp
public bool|IResolvable ForwardQueryParametersInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ForwardUnmanagedPathsInput`<sup>Optional</sup> <a name="ForwardUnmanagedPathsInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.forwardUnmanagedPathsInput"></a>

```csharp
public bool|IResolvable ForwardUnmanagedPathsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `GeminiEnterpriseInput`<sup>Optional</sup> <a name="GeminiEnterpriseInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.geminiEnterpriseInput"></a>

```csharp
public IResolvable|DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterprise GeminiEnterpriseInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterprise">DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterprise</a>

---

##### `InferenceTableInput`<sup>Optional</sup> <a name="InferenceTableInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.inferenceTableInput"></a>

```csharp
public IResolvable|DataDatabricksAiGatewayModelProviderServiceConfigInferenceTable InferenceTableInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTable">DataDatabricksAiGatewayModelProviderServiceConfigInferenceTable</a>

---

##### `MicrosoftFoundryInput`<sup>Optional</sup> <a name="MicrosoftFoundryInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.microsoftFoundryInput"></a>

```csharp
public IResolvable|DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundry MicrosoftFoundryInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundry">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundry</a>

---

##### `OpenaiInput`<sup>Optional</sup> <a name="OpenaiInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.openaiInput"></a>

```csharp
public IResolvable|DataDatabricksAiGatewayModelProviderServiceConfigOpenai OpenaiInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenai">DataDatabricksAiGatewayModelProviderServiceConfigOpenai</a>

---

##### `ProviderTypeInput`<sup>Optional</sup> <a name="ProviderTypeInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.providerTypeInput"></a>

```csharp
public string ProviderTypeInput { get; }
```

- *Type:* string

---

##### `RateLimitsInput`<sup>Optional</sup> <a name="RateLimitsInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.rateLimitsInput"></a>

```csharp
public IResolvable|DataDatabricksAiGatewayModelProviderServiceConfigRateLimits[] RateLimitsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimits">DataDatabricksAiGatewayModelProviderServiceConfigRateLimits</a>[]

---

##### `TargetsInput`<sup>Optional</sup> <a name="TargetsInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.targetsInput"></a>

```csharp
public IResolvable|DataDatabricksAiGatewayModelProviderServiceConfigTargets[] TargetsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargets">DataDatabricksAiGatewayModelProviderServiceConfigTargets</a>[]

---

##### `AllowAllTargets`<sup>Required</sup> <a name="AllowAllTargets" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.allowAllTargets"></a>

```csharp
public bool|IResolvable AllowAllTargets { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ForwardHeaders`<sup>Required</sup> <a name="ForwardHeaders" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.forwardHeaders"></a>

```csharp
public bool|IResolvable ForwardHeaders { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ForwardQueryParameters`<sup>Required</sup> <a name="ForwardQueryParameters" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.forwardQueryParameters"></a>

```csharp
public bool|IResolvable ForwardQueryParameters { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ForwardUnmanagedPaths`<sup>Required</sup> <a name="ForwardUnmanagedPaths" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.forwardUnmanagedPaths"></a>

```csharp
public bool|IResolvable ForwardUnmanagedPaths { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ProviderType`<sup>Required</sup> <a name="ProviderType" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.providerType"></a>

```csharp
public string ProviderType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksAiGatewayModelProviderServiceConfigA InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigA">DataDatabricksAiGatewayModelProviderServiceConfigA</a>

---


### DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference <a name="DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.resetPlaintext">ResetPlaintext</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPlaintext` <a name="ResetPlaintext" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.resetPlaintext"></a>

```csharp
private void ResetPlaintext()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.property.plaintextInput">PlaintextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.property.plaintext">Plaintext</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PlaintextInput`<sup>Optional</sup> <a name="PlaintextInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.property.plaintextInput"></a>

```csharp
public string PlaintextInput { get; }
```

- *Type:* string

---

##### `Plaintext`<sup>Required</sup> <a name="Plaintext" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.property.plaintext"></a>

```csharp
public string Plaintext { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey</a>

---


### DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference <a name="DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.resetPlaintext">ResetPlaintext</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPlaintext` <a name="ResetPlaintext" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.resetPlaintext"></a>

```csharp
private void ResetPlaintext()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.property.plaintextInput">PlaintextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.property.plaintext">Plaintext</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PlaintextInput`<sup>Optional</sup> <a name="PlaintextInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.property.plaintextInput"></a>

```csharp
public string PlaintextInput { get; }
```

- *Type:* string

---

##### `Plaintext`<sup>Required</sup> <a name="Plaintext" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.property.plaintext"></a>

```csharp
public string Plaintext { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret</a>

---


### DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference <a name="DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.putClientSecret">PutClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.resetClientSecret">ResetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.resetTenantId">ResetTenantId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutClientSecret` <a name="PutClientSecret" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.putClientSecret"></a>

```csharp
private void PutClientSecret(DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.putClientSecret.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret</a>

---

##### `ResetClientId` <a name="ResetClientId" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.resetClientId"></a>

```csharp
private void ResetClientId()
```

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.resetClientSecret"></a>

```csharp
private void ResetClientSecret()
```

##### `ResetTenantId` <a name="ResetTenantId" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.resetTenantId"></a>

```csharp
private void ResetTenantId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.property.clientSecret">ClientSecret</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.property.tenantIdInput">TenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.property.clientSecret"></a>

```csharp
public DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference ClientSecret { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecretOutputReference</a>

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.property.clientSecretInput"></a>

```csharp
public IResolvable|DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret ClientSecretInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalClientSecret</a>

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.property.tenantIdInput"></a>

```csharp
public string TenantIdInput { get; }
```

- *Type:* string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal</a>

---


### DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference <a name="DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.putApiKey">PutApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.putEntraServicePrincipal">PutEntraServicePrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.putServiceCredential">PutServiceCredential</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.resetApiKey">ResetApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.resetBaseUrl">ResetBaseUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.resetEntraServicePrincipal">ResetEntraServicePrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.resetServiceCredential">ResetServiceCredential</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApiKey` <a name="PutApiKey" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.putApiKey"></a>

```csharp
private void PutApiKey(DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.putApiKey.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey</a>

---

##### `PutEntraServicePrincipal` <a name="PutEntraServicePrincipal" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.putEntraServicePrincipal"></a>

```csharp
private void PutEntraServicePrincipal(DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.putEntraServicePrincipal.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal</a>

---

##### `PutServiceCredential` <a name="PutServiceCredential" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.putServiceCredential"></a>

```csharp
private void PutServiceCredential(DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.putServiceCredential.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential</a>

---

##### `ResetApiKey` <a name="ResetApiKey" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.resetApiKey"></a>

```csharp
private void ResetApiKey()
```

##### `ResetBaseUrl` <a name="ResetBaseUrl" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.resetBaseUrl"></a>

```csharp
private void ResetBaseUrl()
```

##### `ResetEntraServicePrincipal` <a name="ResetEntraServicePrincipal" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.resetEntraServicePrincipal"></a>

```csharp
private void ResetEntraServicePrincipal()
```

##### `ResetServiceCredential` <a name="ResetServiceCredential" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.resetServiceCredential"></a>

```csharp
private void ResetServiceCredential()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.apiKey">ApiKey</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.entraServicePrincipal">EntraServicePrincipal</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.serviceCredential">ServiceCredential</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.apiKeyInput">ApiKeyInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.baseUrlInput">BaseUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.entraServicePrincipalInput">EntraServicePrincipalInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.serviceCredentialInput">ServiceCredentialInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.baseUrl">BaseUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirect">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirect</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.apiKey"></a>

```csharp
public DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference ApiKey { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKeyOutputReference</a>

---

##### `EntraServicePrincipal`<sup>Required</sup> <a name="EntraServicePrincipal" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.entraServicePrincipal"></a>

```csharp
public DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference EntraServicePrincipal { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipalOutputReference</a>

---

##### `ServiceCredential`<sup>Required</sup> <a name="ServiceCredential" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.serviceCredential"></a>

```csharp
public DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference ServiceCredential { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference</a>

---

##### `ApiKeyInput`<sup>Optional</sup> <a name="ApiKeyInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.apiKeyInput"></a>

```csharp
public IResolvable|DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey ApiKeyInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectApiKey</a>

---

##### `BaseUrlInput`<sup>Optional</sup> <a name="BaseUrlInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.baseUrlInput"></a>

```csharp
public string BaseUrlInput { get; }
```

- *Type:* string

---

##### `EntraServicePrincipalInput`<sup>Optional</sup> <a name="EntraServicePrincipalInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.entraServicePrincipalInput"></a>

```csharp
public IResolvable|DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal EntraServicePrincipalInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectEntraServicePrincipal</a>

---

##### `ServiceCredentialInput`<sup>Optional</sup> <a name="ServiceCredentialInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.serviceCredentialInput"></a>

```csharp
public IResolvable|DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential ServiceCredentialInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential</a>

---

##### `BaseUrl`<sup>Required</sup> <a name="BaseUrl" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.baseUrl"></a>

```csharp
public string BaseUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirect InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirect">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirect</a>

---


### DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference <a name="DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredentialOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectServiceCredential</a>

---


### DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference <a name="DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.putDirect">PutDirect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.resetDirect">ResetDirect</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDirect` <a name="PutDirect" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.putDirect"></a>

```csharp
private void PutDirect(DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirect Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.putDirect.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirect">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirect</a>

---

##### `ResetDirect` <a name="ResetDirect" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.resetDirect"></a>

```csharp
private void ResetDirect()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.property.direct">Direct</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.property.directInput">DirectInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirect">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenai">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenai</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Direct`<sup>Required</sup> <a name="Direct" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.property.direct"></a>

```csharp
public DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference Direct { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirectOutputReference</a>

---

##### `DirectInput`<sup>Optional</sup> <a name="DirectInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.property.directInput"></a>

```csharp
public IResolvable|DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirect DirectInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirect">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiDirect</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenaiOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenai InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenai">DataDatabricksAiGatewayModelProviderServiceConfigAzureOpenai</a>

---


### DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference <a name="DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.resetPlaintext">ResetPlaintext</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPlaintext` <a name="ResetPlaintext" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.resetPlaintext"></a>

```csharp
private void ResetPlaintext()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.property.plaintextInput">PlaintextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.property.plaintext">Plaintext</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKey">DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PlaintextInput`<sup>Optional</sup> <a name="PlaintextInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.property.plaintextInput"></a>

```csharp
public string PlaintextInput { get; }
```

- *Type:* string

---

##### `Plaintext`<sup>Required</sup> <a name="Plaintext" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.property.plaintext"></a>

```csharp
public string Plaintext { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKey InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKey">DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKey</a>

---


### DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference <a name="DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.putApiKey">PutApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.resetApiKey">ResetApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.resetBaseUrl">ResetBaseUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApiKey` <a name="PutApiKey" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.putApiKey"></a>

```csharp
private void PutApiKey(DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKey Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.putApiKey.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKey">DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKey</a>

---

##### `ResetApiKey` <a name="ResetApiKey" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.resetApiKey"></a>

```csharp
private void ResetApiKey()
```

##### `ResetBaseUrl` <a name="ResetBaseUrl" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.resetBaseUrl"></a>

```csharp
private void ResetBaseUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.property.apiKey">ApiKey</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.property.apiKeyInput">ApiKeyInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKey">DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.property.baseUrlInput">BaseUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.property.baseUrl">BaseUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirect">DataDatabricksAiGatewayModelProviderServiceConfigCustomDirect</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.property.apiKey"></a>

```csharp
public DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference ApiKey { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKeyOutputReference</a>

---

##### `ApiKeyInput`<sup>Optional</sup> <a name="ApiKeyInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.property.apiKeyInput"></a>

```csharp
public IResolvable|DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKey ApiKeyInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKey">DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectApiKey</a>

---

##### `BaseUrlInput`<sup>Optional</sup> <a name="BaseUrlInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.property.baseUrlInput"></a>

```csharp
public string BaseUrlInput { get; }
```

- *Type:* string

---

##### `BaseUrl`<sup>Required</sup> <a name="BaseUrl" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.property.baseUrl"></a>

```csharp
public string BaseUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAiGatewayModelProviderServiceConfigCustomDirect InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirect">DataDatabricksAiGatewayModelProviderServiceConfigCustomDirect</a>

---


### DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference <a name="DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.putDirect">PutDirect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.resetDirect">ResetDirect</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDirect` <a name="PutDirect" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.putDirect"></a>

```csharp
private void PutDirect(DataDatabricksAiGatewayModelProviderServiceConfigCustomDirect Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.putDirect.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirect">DataDatabricksAiGatewayModelProviderServiceConfigCustomDirect</a>

---

##### `ResetDirect` <a name="ResetDirect" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.resetDirect"></a>

```csharp
private void ResetDirect()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.property.direct">Direct</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.property.directInput">DirectInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirect">DataDatabricksAiGatewayModelProviderServiceConfigCustomDirect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustom">DataDatabricksAiGatewayModelProviderServiceConfigCustom</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Direct`<sup>Required</sup> <a name="Direct" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.property.direct"></a>

```csharp
public DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference Direct { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigCustomDirectOutputReference</a>

---

##### `DirectInput`<sup>Optional</sup> <a name="DirectInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.property.directInput"></a>

```csharp
public IResolvable|DataDatabricksAiGatewayModelProviderServiceConfigCustomDirect DirectInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomDirect">DataDatabricksAiGatewayModelProviderServiceConfigCustomDirect</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustomOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAiGatewayModelProviderServiceConfigCustom InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigCustom">DataDatabricksAiGatewayModelProviderServiceConfigCustom</a>

---


### DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference <a name="DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.resetPlaintext">ResetPlaintext</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPlaintext` <a name="ResetPlaintext" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.resetPlaintext"></a>

```csharp
private void ResetPlaintext()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.property.plaintextInput">PlaintextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.property.plaintext">Plaintext</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey">DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PlaintextInput`<sup>Optional</sup> <a name="PlaintextInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.property.plaintextInput"></a>

```csharp
public string PlaintextInput { get; }
```

- *Type:* string

---

##### `Plaintext`<sup>Required</sup> <a name="Plaintext" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.property.plaintext"></a>

```csharp
public string Plaintext { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey">DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey</a>

---


### DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference <a name="DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.putApiKey">PutApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.resetApiKey">ResetApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.resetProjectId">ResetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApiKey` <a name="PutApiKey" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.putApiKey"></a>

```csharp
private void PutApiKey(DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.putApiKey.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey">DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey</a>

---

##### `ResetApiKey` <a name="ResetApiKey" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.resetApiKey"></a>

```csharp
private void ResetApiKey()
```

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.resetProjectId"></a>

```csharp
private void ResetProjectId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.resetRegion"></a>

```csharp
private void ResetRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.apiKey">ApiKey</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.apiKeyInput">ApiKeyInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey">DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirect">DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirect</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.apiKey"></a>

```csharp
public DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference ApiKey { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKeyOutputReference</a>

---

##### `ApiKeyInput`<sup>Optional</sup> <a name="ApiKeyInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.apiKeyInput"></a>

```csharp
public IResolvable|DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey ApiKeyInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey">DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectApiKey</a>

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirect InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirect">DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirect</a>

---


### DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference <a name="DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.putDirect">PutDirect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.resetDirect">ResetDirect</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDirect` <a name="PutDirect" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.putDirect"></a>

```csharp
private void PutDirect(DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirect Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.putDirect.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirect">DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirect</a>

---

##### `ResetDirect` <a name="ResetDirect" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.resetDirect"></a>

```csharp
private void ResetDirect()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.property.direct">Direct</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.property.directInput">DirectInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirect">DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterprise">DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterprise</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Direct`<sup>Required</sup> <a name="Direct" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.property.direct"></a>

```csharp
public DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference Direct { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirectOutputReference</a>

---

##### `DirectInput`<sup>Optional</sup> <a name="DirectInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.property.directInput"></a>

```csharp
public IResolvable|DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirect DirectInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirect">DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseDirect</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterpriseOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterprise InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterprise">DataDatabricksAiGatewayModelProviderServiceConfigGeminiEnterprise</a>

---


### DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference <a name="DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.resetDisabled">ResetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.resetTableNamePrefix">ResetTableNamePrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.resetDisabled"></a>

```csharp
private void ResetDisabled()
```

##### `ResetTableNamePrefix` <a name="ResetTableNamePrefix" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.resetTableNamePrefix"></a>

```csharp
private void ResetTableNamePrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.isDeleted">IsDeleted</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.table">Table</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.disabledInput">DisabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.parentInput">ParentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.tableNamePrefixInput">TableNamePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.disabled">Disabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.parent">Parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.tableNamePrefix">TableNamePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTable">DataDatabricksAiGatewayModelProviderServiceConfigInferenceTable</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsDeleted`<sup>Required</sup> <a name="IsDeleted" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.isDeleted"></a>

```csharp
public IResolvable IsDeleted { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Table`<sup>Required</sup> <a name="Table" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.table"></a>

```csharp
public string Table { get; }
```

- *Type:* string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.disabledInput"></a>

```csharp
public bool|IResolvable DisabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.parentInput"></a>

```csharp
public string ParentInput { get; }
```

- *Type:* string

---

##### `TableNamePrefixInput`<sup>Optional</sup> <a name="TableNamePrefixInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.tableNamePrefixInput"></a>

```csharp
public string TableNamePrefixInput { get; }
```

- *Type:* string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.disabled"></a>

```csharp
public bool|IResolvable Disabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.parent"></a>

```csharp
public string Parent { get; }
```

- *Type:* string

---

##### `TableNamePrefix`<sup>Required</sup> <a name="TableNamePrefix" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.tableNamePrefix"></a>

```csharp
public string TableNamePrefix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTableOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAiGatewayModelProviderServiceConfigInferenceTable InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigInferenceTable">DataDatabricksAiGatewayModelProviderServiceConfigInferenceTable</a>

---


### DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference <a name="DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.resetPlaintext">ResetPlaintext</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPlaintext` <a name="ResetPlaintext" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.resetPlaintext"></a>

```csharp
private void ResetPlaintext()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.property.plaintextInput">PlaintextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.property.plaintext">Plaintext</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PlaintextInput`<sup>Optional</sup> <a name="PlaintextInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.property.plaintextInput"></a>

```csharp
public string PlaintextInput { get; }
```

- *Type:* string

---

##### `Plaintext`<sup>Required</sup> <a name="Plaintext" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.property.plaintext"></a>

```csharp
public string Plaintext { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey</a>

---


### DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference <a name="DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.resetPlaintext">ResetPlaintext</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPlaintext` <a name="ResetPlaintext" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.resetPlaintext"></a>

```csharp
private void ResetPlaintext()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.property.plaintextInput">PlaintextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.property.plaintext">Plaintext</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PlaintextInput`<sup>Optional</sup> <a name="PlaintextInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.property.plaintextInput"></a>

```csharp
public string PlaintextInput { get; }
```

- *Type:* string

---

##### `Plaintext`<sup>Required</sup> <a name="Plaintext" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.property.plaintext"></a>

```csharp
public string Plaintext { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret</a>

---


### DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference <a name="DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.putClientSecret">PutClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.resetClientSecret">ResetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.resetTenantId">ResetTenantId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutClientSecret` <a name="PutClientSecret" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.putClientSecret"></a>

```csharp
private void PutClientSecret(DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.putClientSecret.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret</a>

---

##### `ResetClientId` <a name="ResetClientId" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.resetClientId"></a>

```csharp
private void ResetClientId()
```

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.resetClientSecret"></a>

```csharp
private void ResetClientSecret()
```

##### `ResetTenantId` <a name="ResetTenantId" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.resetTenantId"></a>

```csharp
private void ResetTenantId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.property.clientSecret">ClientSecret</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.property.tenantIdInput">TenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.property.clientSecret"></a>

```csharp
public DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference ClientSecret { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecretOutputReference</a>

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.property.clientSecretInput"></a>

```csharp
public IResolvable|DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret ClientSecretInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalClientSecret</a>

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.property.tenantIdInput"></a>

```csharp
public string TenantIdInput { get; }
```

- *Type:* string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal</a>

---


### DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference <a name="DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.putApiKey">PutApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.putEntraServicePrincipal">PutEntraServicePrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.putServiceCredential">PutServiceCredential</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.resetApiKey">ResetApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.resetBaseUrl">ResetBaseUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.resetEntraServicePrincipal">ResetEntraServicePrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.resetServiceCredential">ResetServiceCredential</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApiKey` <a name="PutApiKey" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.putApiKey"></a>

```csharp
private void PutApiKey(DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.putApiKey.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey</a>

---

##### `PutEntraServicePrincipal` <a name="PutEntraServicePrincipal" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.putEntraServicePrincipal"></a>

```csharp
private void PutEntraServicePrincipal(DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.putEntraServicePrincipal.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal</a>

---

##### `PutServiceCredential` <a name="PutServiceCredential" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.putServiceCredential"></a>

```csharp
private void PutServiceCredential(DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.putServiceCredential.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential</a>

---

##### `ResetApiKey` <a name="ResetApiKey" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.resetApiKey"></a>

```csharp
private void ResetApiKey()
```

##### `ResetBaseUrl` <a name="ResetBaseUrl" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.resetBaseUrl"></a>

```csharp
private void ResetBaseUrl()
```

##### `ResetEntraServicePrincipal` <a name="ResetEntraServicePrincipal" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.resetEntraServicePrincipal"></a>

```csharp
private void ResetEntraServicePrincipal()
```

##### `ResetServiceCredential` <a name="ResetServiceCredential" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.resetServiceCredential"></a>

```csharp
private void ResetServiceCredential()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.apiKey">ApiKey</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.entraServicePrincipal">EntraServicePrincipal</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.serviceCredential">ServiceCredential</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.apiKeyInput">ApiKeyInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.baseUrlInput">BaseUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.entraServicePrincipalInput">EntraServicePrincipalInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.serviceCredentialInput">ServiceCredentialInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.baseUrl">BaseUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirect">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirect</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.apiKey"></a>

```csharp
public DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference ApiKey { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKeyOutputReference</a>

---

##### `EntraServicePrincipal`<sup>Required</sup> <a name="EntraServicePrincipal" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.entraServicePrincipal"></a>

```csharp
public DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference EntraServicePrincipal { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipalOutputReference</a>

---

##### `ServiceCredential`<sup>Required</sup> <a name="ServiceCredential" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.serviceCredential"></a>

```csharp
public DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference ServiceCredential { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference</a>

---

##### `ApiKeyInput`<sup>Optional</sup> <a name="ApiKeyInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.apiKeyInput"></a>

```csharp
public IResolvable|DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey ApiKeyInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectApiKey</a>

---

##### `BaseUrlInput`<sup>Optional</sup> <a name="BaseUrlInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.baseUrlInput"></a>

```csharp
public string BaseUrlInput { get; }
```

- *Type:* string

---

##### `EntraServicePrincipalInput`<sup>Optional</sup> <a name="EntraServicePrincipalInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.entraServicePrincipalInput"></a>

```csharp
public IResolvable|DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal EntraServicePrincipalInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectEntraServicePrincipal</a>

---

##### `ServiceCredentialInput`<sup>Optional</sup> <a name="ServiceCredentialInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.serviceCredentialInput"></a>

```csharp
public IResolvable|DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential ServiceCredentialInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential</a>

---

##### `BaseUrl`<sup>Required</sup> <a name="BaseUrl" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.baseUrl"></a>

```csharp
public string BaseUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirect InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirect">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirect</a>

---


### DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference <a name="DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredentialOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectServiceCredential</a>

---


### DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference <a name="DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.putDirect">PutDirect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.resetDirect">ResetDirect</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDirect` <a name="PutDirect" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.putDirect"></a>

```csharp
private void PutDirect(DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirect Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.putDirect.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirect">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirect</a>

---

##### `ResetDirect` <a name="ResetDirect" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.resetDirect"></a>

```csharp
private void ResetDirect()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.property.direct">Direct</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.property.directInput">DirectInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirect">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundry">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundry</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Direct`<sup>Required</sup> <a name="Direct" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.property.direct"></a>

```csharp
public DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference Direct { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirectOutputReference</a>

---

##### `DirectInput`<sup>Optional</sup> <a name="DirectInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.property.directInput"></a>

```csharp
public IResolvable|DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirect DirectInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirect">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryDirect</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundryOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundry InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundry">DataDatabricksAiGatewayModelProviderServiceConfigMicrosoftFoundry</a>

---


### DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference <a name="DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.resetPlaintext">ResetPlaintext</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPlaintext` <a name="ResetPlaintext" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.resetPlaintext"></a>

```csharp
private void ResetPlaintext()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.property.plaintextInput">PlaintextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.property.plaintext">Plaintext</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKey">DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PlaintextInput`<sup>Optional</sup> <a name="PlaintextInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.property.plaintextInput"></a>

```csharp
public string PlaintextInput { get; }
```

- *Type:* string

---

##### `Plaintext`<sup>Required</sup> <a name="Plaintext" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.property.plaintext"></a>

```csharp
public string Plaintext { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKey InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKey">DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKey</a>

---


### DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference <a name="DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.putApiKey">PutApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.resetApiKey">ResetApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.resetBaseUrl">ResetBaseUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.resetOrganization">ResetOrganization</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApiKey` <a name="PutApiKey" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.putApiKey"></a>

```csharp
private void PutApiKey(DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKey Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.putApiKey.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKey">DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKey</a>

---

##### `ResetApiKey` <a name="ResetApiKey" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.resetApiKey"></a>

```csharp
private void ResetApiKey()
```

##### `ResetBaseUrl` <a name="ResetBaseUrl" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.resetBaseUrl"></a>

```csharp
private void ResetBaseUrl()
```

##### `ResetOrganization` <a name="ResetOrganization" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.resetOrganization"></a>

```csharp
private void ResetOrganization()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.apiKey">ApiKey</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.apiKeyInput">ApiKeyInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKey">DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.baseUrlInput">BaseUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.organizationInput">OrganizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.baseUrl">BaseUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.organization">Organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirect">DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirect</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.apiKey"></a>

```csharp
public DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference ApiKey { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKeyOutputReference</a>

---

##### `ApiKeyInput`<sup>Optional</sup> <a name="ApiKeyInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.apiKeyInput"></a>

```csharp
public IResolvable|DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKey ApiKeyInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKey">DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectApiKey</a>

---

##### `BaseUrlInput`<sup>Optional</sup> <a name="BaseUrlInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.baseUrlInput"></a>

```csharp
public string BaseUrlInput { get; }
```

- *Type:* string

---

##### `OrganizationInput`<sup>Optional</sup> <a name="OrganizationInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.organizationInput"></a>

```csharp
public string OrganizationInput { get; }
```

- *Type:* string

---

##### `BaseUrl`<sup>Required</sup> <a name="BaseUrl" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.baseUrl"></a>

```csharp
public string BaseUrl { get; }
```

- *Type:* string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.organization"></a>

```csharp
public string Organization { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirect InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirect">DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirect</a>

---


### DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference <a name="DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.putDirect">PutDirect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.resetDirect">ResetDirect</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDirect` <a name="PutDirect" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.putDirect"></a>

```csharp
private void PutDirect(DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirect Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.putDirect.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirect">DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirect</a>

---

##### `ResetDirect` <a name="ResetDirect" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.resetDirect"></a>

```csharp
private void ResetDirect()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.property.direct">Direct</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.property.directInput">DirectInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirect">DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenai">DataDatabricksAiGatewayModelProviderServiceConfigOpenai</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Direct`<sup>Required</sup> <a name="Direct" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.property.direct"></a>

```csharp
public DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference Direct { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference">DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirectOutputReference</a>

---

##### `DirectInput`<sup>Optional</sup> <a name="DirectInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.property.directInput"></a>

```csharp
public IResolvable|DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirect DirectInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirect">DataDatabricksAiGatewayModelProviderServiceConfigOpenaiDirect</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenaiOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAiGatewayModelProviderServiceConfigOpenai InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigOpenai">DataDatabricksAiGatewayModelProviderServiceConfigOpenai</a>

---


### DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsList <a name="DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsList" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsList.get"></a>

```csharp
private DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimits">DataDatabricksAiGatewayModelProviderServiceConfigRateLimits</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsList.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAiGatewayModelProviderServiceConfigRateLimits[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimits">DataDatabricksAiGatewayModelProviderServiceConfigRateLimits</a>[]

---


### DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference <a name="DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.resetPrincipal">ResetPrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.resetRequests">ResetRequests</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.resetRequestTagKey">ResetRequestTagKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.resetRequestTagValue">ResetRequestTagValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.resetTokens">ResetTokens</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPrincipal` <a name="ResetPrincipal" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.resetPrincipal"></a>

```csharp
private void ResetPrincipal()
```

##### `ResetRequests` <a name="ResetRequests" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.resetRequests"></a>

```csharp
private void ResetRequests()
```

##### `ResetRequestTagKey` <a name="ResetRequestTagKey" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.resetRequestTagKey"></a>

```csharp
private void ResetRequestTagKey()
```

##### `ResetRequestTagValue` <a name="ResetRequestTagValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.resetRequestTagValue"></a>

```csharp
private void ResetRequestTagValue()
```

##### `ResetTokens` <a name="ResetTokens" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.resetTokens"></a>

```csharp
private void ResetTokens()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.principalInput">PrincipalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.renewalPeriodInput">RenewalPeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.requestsInput">RequestsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.requestTagKeyInput">RequestTagKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.requestTagValueInput">RequestTagValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.tokensInput">TokensInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.principal">Principal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.renewalPeriod">RenewalPeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.requests">Requests</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.requestTagKey">RequestTagKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.requestTagValue">RequestTagValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.tokens">Tokens</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimits">DataDatabricksAiGatewayModelProviderServiceConfigRateLimits</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `PrincipalInput`<sup>Optional</sup> <a name="PrincipalInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.principalInput"></a>

```csharp
public string PrincipalInput { get; }
```

- *Type:* string

---

##### `RenewalPeriodInput`<sup>Optional</sup> <a name="RenewalPeriodInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.renewalPeriodInput"></a>

```csharp
public string RenewalPeriodInput { get; }
```

- *Type:* string

---

##### `RequestsInput`<sup>Optional</sup> <a name="RequestsInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.requestsInput"></a>

```csharp
public double RequestsInput { get; }
```

- *Type:* double

---

##### `RequestTagKeyInput`<sup>Optional</sup> <a name="RequestTagKeyInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.requestTagKeyInput"></a>

```csharp
public string RequestTagKeyInput { get; }
```

- *Type:* string

---

##### `RequestTagValueInput`<sup>Optional</sup> <a name="RequestTagValueInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.requestTagValueInput"></a>

```csharp
public string RequestTagValueInput { get; }
```

- *Type:* string

---

##### `TokensInput`<sup>Optional</sup> <a name="TokensInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.tokensInput"></a>

```csharp
public double TokensInput { get; }
```

- *Type:* double

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.principal"></a>

```csharp
public string Principal { get; }
```

- *Type:* string

---

##### `RenewalPeriod`<sup>Required</sup> <a name="RenewalPeriod" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.renewalPeriod"></a>

```csharp
public string RenewalPeriod { get; }
```

- *Type:* string

---

##### `Requests`<sup>Required</sup> <a name="Requests" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.requests"></a>

```csharp
public double Requests { get; }
```

- *Type:* double

---

##### `RequestTagKey`<sup>Required</sup> <a name="RequestTagKey" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.requestTagKey"></a>

```csharp
public string RequestTagKey { get; }
```

- *Type:* string

---

##### `RequestTagValue`<sup>Required</sup> <a name="RequestTagValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.requestTagValue"></a>

```csharp
public string RequestTagValue { get; }
```

- *Type:* string

---

##### `Tokens`<sup>Required</sup> <a name="Tokens" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.tokens"></a>

```csharp
public double Tokens { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimitsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAiGatewayModelProviderServiceConfigRateLimits InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigRateLimits">DataDatabricksAiGatewayModelProviderServiceConfigRateLimits</a>

---


### DataDatabricksAiGatewayModelProviderServiceConfigTargetsList <a name="DataDatabricksAiGatewayModelProviderServiceConfigTargetsList" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAiGatewayModelProviderServiceConfigTargetsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsList.get"></a>

```csharp
private DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargets">DataDatabricksAiGatewayModelProviderServiceConfigTargets</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsList.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAiGatewayModelProviderServiceConfigTargets[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargets">DataDatabricksAiGatewayModelProviderServiceConfigTargets</a>[]

---


### DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference <a name="DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.resetNativeApiTypes">ResetNativeApiTypes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNativeApiTypes` <a name="ResetNativeApiTypes" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.resetNativeApiTypes"></a>

```csharp
private void ResetNativeApiTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.property.modelInput">ModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.property.nativeApiTypesInput">NativeApiTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.property.model">Model</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.property.nativeApiTypes">NativeApiTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargets">DataDatabricksAiGatewayModelProviderServiceConfigTargets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ModelInput`<sup>Optional</sup> <a name="ModelInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.property.modelInput"></a>

```csharp
public string ModelInput { get; }
```

- *Type:* string

---

##### `NativeApiTypesInput`<sup>Optional</sup> <a name="NativeApiTypesInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.property.nativeApiTypesInput"></a>

```csharp
public string[] NativeApiTypesInput { get; }
```

- *Type:* string[]

---

##### `Model`<sup>Required</sup> <a name="Model" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.property.model"></a>

```csharp
public string Model { get; }
```

- *Type:* string

---

##### `NativeApiTypes`<sup>Required</sup> <a name="NativeApiTypes" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.property.nativeApiTypes"></a>

```csharp
public string[] NativeApiTypes { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargetsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAiGatewayModelProviderServiceConfigTargets InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceConfigTargets">DataDatabricksAiGatewayModelProviderServiceConfigTargets</a>

---


### DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference <a name="DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.resetWorkspaceId"></a>

```csharp
private void ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfig">DataDatabricksAiGatewayModelProviderServiceProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAiGatewayModelProviderServiceProviderConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayModelProviderService.DataDatabricksAiGatewayModelProviderServiceProviderConfig">DataDatabricksAiGatewayModelProviderServiceProviderConfig</a>

---



