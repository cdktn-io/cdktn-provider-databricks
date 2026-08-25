# `dataDatabricksAiSearchEndpoints` Submodule <a name="`dataDatabricksAiSearchEndpoints` Submodule" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksAiSearchEndpoints <a name="DataDatabricksAiSearchEndpoints" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_search_endpoints databricks_ai_search_endpoints}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAiSearchEndpoints(Construct Scope, string Id, DataDatabricksAiSearchEndpointsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsConfig">DataDatabricksAiSearchEndpointsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsConfig">DataDatabricksAiSearchEndpointsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.resetPageSize">ResetPageSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.putProviderConfig"></a>

```csharp
private void PutProviderConfig(DataDatabricksAiSearchEndpointsProviderConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfig">DataDatabricksAiSearchEndpointsProviderConfig</a>

---

##### `ResetPageSize` <a name="ResetPageSize" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.resetPageSize"></a>

```csharp
private void ResetPageSize()
```

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.resetProviderConfig"></a>

```csharp
private void ResetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksAiSearchEndpoints resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksAiSearchEndpoints.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksAiSearchEndpoints.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksAiSearchEndpoints.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksAiSearchEndpoints.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataDatabricksAiSearchEndpoints resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksAiSearchEndpoints to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksAiSearchEndpoints that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_search_endpoints#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksAiSearchEndpoints to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.property.endpoints">Endpoints</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsList">DataDatabricksAiSearchEndpointsEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfigOutputReference">DataDatabricksAiSearchEndpointsProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.property.pageSizeInput">PageSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.property.parentInput">ParentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.property.providerConfigInput">ProviderConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfig">DataDatabricksAiSearchEndpointsProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.property.pageSize">PageSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.property.parent">Parent</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Endpoints`<sup>Required</sup> <a name="Endpoints" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.property.endpoints"></a>

```csharp
public DataDatabricksAiSearchEndpointsEndpointsList Endpoints { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsList">DataDatabricksAiSearchEndpointsEndpointsList</a>

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.property.providerConfig"></a>

```csharp
public DataDatabricksAiSearchEndpointsProviderConfigOutputReference ProviderConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfigOutputReference">DataDatabricksAiSearchEndpointsProviderConfigOutputReference</a>

---

##### `PageSizeInput`<sup>Optional</sup> <a name="PageSizeInput" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.property.pageSizeInput"></a>

```csharp
public double PageSizeInput { get; }
```

- *Type:* double

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.property.parentInput"></a>

```csharp
public string ParentInput { get; }
```

- *Type:* string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.property.providerConfigInput"></a>

```csharp
public IResolvable|DataDatabricksAiSearchEndpointsProviderConfig ProviderConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfig">DataDatabricksAiSearchEndpointsProviderConfig</a>

---

##### `PageSize`<sup>Required</sup> <a name="PageSize" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.property.pageSize"></a>

```csharp
public double PageSize { get; }
```

- *Type:* double

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.property.parent"></a>

```csharp
public string Parent { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpoints.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksAiSearchEndpointsConfig <a name="DataDatabricksAiSearchEndpointsConfig" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAiSearchEndpointsConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Parent,
    double PageSize = null,
    DataDatabricksAiSearchEndpointsProviderConfig ProviderConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsConfig.property.parent">Parent</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_search_endpoints#parent DataDatabricksAiSearchEndpoints#parent}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsConfig.property.pageSize">PageSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_search_endpoints#page_size DataDatabricksAiSearchEndpoints#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfig">DataDatabricksAiSearchEndpointsProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_search_endpoints#provider_config DataDatabricksAiSearchEndpoints#provider_config}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsConfig.property.parent"></a>

```csharp
public string Parent { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_search_endpoints#parent DataDatabricksAiSearchEndpoints#parent}.

---

##### `PageSize`<sup>Optional</sup> <a name="PageSize" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsConfig.property.pageSize"></a>

```csharp
public double PageSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_search_endpoints#page_size DataDatabricksAiSearchEndpoints#page_size}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsConfig.property.providerConfig"></a>

```csharp
public DataDatabricksAiSearchEndpointsProviderConfig ProviderConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfig">DataDatabricksAiSearchEndpointsProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_search_endpoints#provider_config DataDatabricksAiSearchEndpoints#provider_config}.

---

### DataDatabricksAiSearchEndpointsEndpoints <a name="DataDatabricksAiSearchEndpointsEndpoints" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpoints.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAiSearchEndpointsEndpoints {
    string Name,
    DataDatabricksAiSearchEndpointsEndpointsProviderConfig ProviderConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpoints.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_search_endpoints#name DataDatabricksAiSearchEndpoints#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpoints.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfig">DataDatabricksAiSearchEndpointsEndpointsProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_search_endpoints#provider_config DataDatabricksAiSearchEndpoints#provider_config}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpoints.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_search_endpoints#name DataDatabricksAiSearchEndpoints#name}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpoints.property.providerConfig"></a>

```csharp
public DataDatabricksAiSearchEndpointsEndpointsProviderConfig ProviderConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfig">DataDatabricksAiSearchEndpointsEndpointsProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_search_endpoints#provider_config DataDatabricksAiSearchEndpoints#provider_config}.

---

### DataDatabricksAiSearchEndpointsEndpointsCustomTags <a name="DataDatabricksAiSearchEndpointsEndpointsCustomTags" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAiSearchEndpointsEndpointsCustomTags {
    string Key,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_search_endpoints#key DataDatabricksAiSearchEndpoints#key}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_search_endpoints#value DataDatabricksAiSearchEndpoints#value}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_search_endpoints#key DataDatabricksAiSearchEndpoints#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_search_endpoints#value DataDatabricksAiSearchEndpoints#value}.

---

### DataDatabricksAiSearchEndpointsEndpointsEndpointStatus <a name="DataDatabricksAiSearchEndpointsEndpointsEndpointStatus" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatus.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAiSearchEndpointsEndpointsEndpointStatus {

};
```


### DataDatabricksAiSearchEndpointsEndpointsProviderConfig <a name="DataDatabricksAiSearchEndpointsEndpointsProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAiSearchEndpointsEndpointsProviderConfig {
    string WorkspaceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_search_endpoints#workspace_id DataDatabricksAiSearchEndpoints#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_search_endpoints#workspace_id DataDatabricksAiSearchEndpoints#workspace_id}.

---

### DataDatabricksAiSearchEndpointsEndpointsScalingInfo <a name="DataDatabricksAiSearchEndpointsEndpointsScalingInfo" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfo.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAiSearchEndpointsEndpointsScalingInfo {
    double RequestedTargetQps = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfo.property.requestedTargetQps">RequestedTargetQps</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_search_endpoints#requested_target_qps DataDatabricksAiSearchEndpoints#requested_target_qps}. |

---

##### `RequestedTargetQps`<sup>Optional</sup> <a name="RequestedTargetQps" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfo.property.requestedTargetQps"></a>

```csharp
public double RequestedTargetQps { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_search_endpoints#requested_target_qps DataDatabricksAiSearchEndpoints#requested_target_qps}.

---

### DataDatabricksAiSearchEndpointsEndpointsThroughputInfo <a name="DataDatabricksAiSearchEndpointsEndpointsThroughputInfo" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfo.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAiSearchEndpointsEndpointsThroughputInfo {
    double MaximumConcurrencyAllowed = null,
    double MinimalConcurrencyAllowed = null,
    double RequestedConcurrency = null,
    double RequestedNumReplicas = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfo.property.maximumConcurrencyAllowed">MaximumConcurrencyAllowed</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_search_endpoints#maximum_concurrency_allowed DataDatabricksAiSearchEndpoints#maximum_concurrency_allowed}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfo.property.minimalConcurrencyAllowed">MinimalConcurrencyAllowed</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_search_endpoints#minimal_concurrency_allowed DataDatabricksAiSearchEndpoints#minimal_concurrency_allowed}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfo.property.requestedConcurrency">RequestedConcurrency</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_search_endpoints#requested_concurrency DataDatabricksAiSearchEndpoints#requested_concurrency}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfo.property.requestedNumReplicas">RequestedNumReplicas</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_search_endpoints#requested_num_replicas DataDatabricksAiSearchEndpoints#requested_num_replicas}. |

---

##### `MaximumConcurrencyAllowed`<sup>Optional</sup> <a name="MaximumConcurrencyAllowed" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfo.property.maximumConcurrencyAllowed"></a>

```csharp
public double MaximumConcurrencyAllowed { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_search_endpoints#maximum_concurrency_allowed DataDatabricksAiSearchEndpoints#maximum_concurrency_allowed}.

---

##### `MinimalConcurrencyAllowed`<sup>Optional</sup> <a name="MinimalConcurrencyAllowed" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfo.property.minimalConcurrencyAllowed"></a>

```csharp
public double MinimalConcurrencyAllowed { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_search_endpoints#minimal_concurrency_allowed DataDatabricksAiSearchEndpoints#minimal_concurrency_allowed}.

---

##### `RequestedConcurrency`<sup>Optional</sup> <a name="RequestedConcurrency" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfo.property.requestedConcurrency"></a>

```csharp
public double RequestedConcurrency { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_search_endpoints#requested_concurrency DataDatabricksAiSearchEndpoints#requested_concurrency}.

---

##### `RequestedNumReplicas`<sup>Optional</sup> <a name="RequestedNumReplicas" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfo.property.requestedNumReplicas"></a>

```csharp
public double RequestedNumReplicas { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_search_endpoints#requested_num_replicas DataDatabricksAiSearchEndpoints#requested_num_replicas}.

---

### DataDatabricksAiSearchEndpointsProviderConfig <a name="DataDatabricksAiSearchEndpointsProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAiSearchEndpointsProviderConfig {
    string WorkspaceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_search_endpoints#workspace_id DataDatabricksAiSearchEndpoints#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/ai_search_endpoints#workspace_id DataDatabricksAiSearchEndpoints#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksAiSearchEndpointsEndpointsCustomTagsList <a name="DataDatabricksAiSearchEndpointsEndpointsCustomTagsList" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAiSearchEndpointsEndpointsCustomTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsList.get"></a>

```csharp
private DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTags">DataDatabricksAiSearchEndpointsEndpointsCustomTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsList.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAiSearchEndpointsEndpointsCustomTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTags">DataDatabricksAiSearchEndpointsEndpointsCustomTags</a>[]

---


### DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference <a name="DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTags">DataDatabricksAiSearchEndpointsEndpointsCustomTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksAiSearchEndpointsEndpointsCustomTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTags">DataDatabricksAiSearchEndpointsEndpointsCustomTags</a>

---


### DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference <a name="DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatus">DataDatabricksAiSearchEndpointsEndpointsEndpointStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksAiSearchEndpointsEndpointsEndpointStatus InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatus">DataDatabricksAiSearchEndpointsEndpointsEndpointStatus</a>

---


### DataDatabricksAiSearchEndpointsEndpointsList <a name="DataDatabricksAiSearchEndpointsEndpointsList" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAiSearchEndpointsEndpointsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsList.get"></a>

```csharp
private DataDatabricksAiSearchEndpointsEndpointsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpoints">DataDatabricksAiSearchEndpointsEndpoints</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsList.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAiSearchEndpointsEndpoints[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpoints">DataDatabricksAiSearchEndpointsEndpoints</a>[]

---


### DataDatabricksAiSearchEndpointsEndpointsOutputReference <a name="DataDatabricksAiSearchEndpointsEndpointsOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAiSearchEndpointsEndpointsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.putProviderConfig"></a>

```csharp
private void PutProviderConfig(DataDatabricksAiSearchEndpointsEndpointsProviderConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfig">DataDatabricksAiSearchEndpointsEndpointsProviderConfig</a>

---

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.resetProviderConfig"></a>

```csharp
private void ResetProviderConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.property.budgetPolicyId">BudgetPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.property.creator">Creator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.property.customTags">CustomTags</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsList">DataDatabricksAiSearchEndpointsEndpointsCustomTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.property.effectiveBudgetPolicyId">EffectiveBudgetPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.property.endpointStatus">EndpointStatus</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference">DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.property.endpointType">EndpointType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.property.indexCount">IndexCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.property.lastUpdatedUser">LastUpdatedUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference">DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.property.replicaCount">ReplicaCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.property.scalingInfo">ScalingInfo</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference">DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.property.targetQps">TargetQps</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.property.throughputInfo">ThroughputInfo</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference">DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.property.usagePolicyId">UsagePolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.property.providerConfigInput">ProviderConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfig">DataDatabricksAiSearchEndpointsEndpointsProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpoints">DataDatabricksAiSearchEndpointsEndpoints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BudgetPolicyId`<sup>Required</sup> <a name="BudgetPolicyId" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.property.budgetPolicyId"></a>

```csharp
public string BudgetPolicyId { get; }
```

- *Type:* string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Creator`<sup>Required</sup> <a name="Creator" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.property.creator"></a>

```csharp
public string Creator { get; }
```

- *Type:* string

---

##### `CustomTags`<sup>Required</sup> <a name="CustomTags" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.property.customTags"></a>

```csharp
public DataDatabricksAiSearchEndpointsEndpointsCustomTagsList CustomTags { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsCustomTagsList">DataDatabricksAiSearchEndpointsEndpointsCustomTagsList</a>

---

##### `EffectiveBudgetPolicyId`<sup>Required</sup> <a name="EffectiveBudgetPolicyId" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.property.effectiveBudgetPolicyId"></a>

```csharp
public string EffectiveBudgetPolicyId { get; }
```

- *Type:* string

---

##### `EndpointStatus`<sup>Required</sup> <a name="EndpointStatus" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.property.endpointStatus"></a>

```csharp
public DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference EndpointStatus { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference">DataDatabricksAiSearchEndpointsEndpointsEndpointStatusOutputReference</a>

---

##### `EndpointType`<sup>Required</sup> <a name="EndpointType" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.property.endpointType"></a>

```csharp
public string EndpointType { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IndexCount`<sup>Required</sup> <a name="IndexCount" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.property.indexCount"></a>

```csharp
public double IndexCount { get; }
```

- *Type:* double

---

##### `LastUpdatedUser`<sup>Required</sup> <a name="LastUpdatedUser" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.property.lastUpdatedUser"></a>

```csharp
public string LastUpdatedUser { get; }
```

- *Type:* string

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.property.providerConfig"></a>

```csharp
public DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference ProviderConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference">DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference</a>

---

##### `ReplicaCount`<sup>Required</sup> <a name="ReplicaCount" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.property.replicaCount"></a>

```csharp
public double ReplicaCount { get; }
```

- *Type:* double

---

##### `ScalingInfo`<sup>Required</sup> <a name="ScalingInfo" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.property.scalingInfo"></a>

```csharp
public DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference ScalingInfo { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference">DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference</a>

---

##### `TargetQps`<sup>Required</sup> <a name="TargetQps" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.property.targetQps"></a>

```csharp
public double TargetQps { get; }
```

- *Type:* double

---

##### `ThroughputInfo`<sup>Required</sup> <a name="ThroughputInfo" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.property.throughputInfo"></a>

```csharp
public DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference ThroughputInfo { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference">DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `UsagePolicyId`<sup>Required</sup> <a name="UsagePolicyId" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.property.usagePolicyId"></a>

```csharp
public string UsagePolicyId { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.property.providerConfigInput"></a>

```csharp
public IResolvable|DataDatabricksAiSearchEndpointsEndpointsProviderConfig ProviderConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfig">DataDatabricksAiSearchEndpointsEndpointsProviderConfig</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksAiSearchEndpointsEndpoints InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpoints">DataDatabricksAiSearchEndpointsEndpoints</a>

---


### DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference <a name="DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference.resetWorkspaceId"></a>

```csharp
private void ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfig">DataDatabricksAiSearchEndpointsEndpointsProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAiSearchEndpointsEndpointsProviderConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsProviderConfig">DataDatabricksAiSearchEndpointsEndpointsProviderConfig</a>

---


### DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference <a name="DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference.resetRequestedTargetQps">ResetRequestedTargetQps</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRequestedTargetQps` <a name="ResetRequestedTargetQps" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference.resetRequestedTargetQps"></a>

```csharp
private void ResetRequestedTargetQps()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference.property.requestedTargetQpsInput">RequestedTargetQpsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference.property.requestedTargetQps">RequestedTargetQps</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfo">DataDatabricksAiSearchEndpointsEndpointsScalingInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `RequestedTargetQpsInput`<sup>Optional</sup> <a name="RequestedTargetQpsInput" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference.property.requestedTargetQpsInput"></a>

```csharp
public double RequestedTargetQpsInput { get; }
```

- *Type:* double

---

##### `RequestedTargetQps`<sup>Required</sup> <a name="RequestedTargetQps" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference.property.requestedTargetQps"></a>

```csharp
public double RequestedTargetQps { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfoOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksAiSearchEndpointsEndpointsScalingInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsScalingInfo">DataDatabricksAiSearchEndpointsEndpointsScalingInfo</a>

---


### DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference <a name="DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.resetMaximumConcurrencyAllowed">ResetMaximumConcurrencyAllowed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.resetMinimalConcurrencyAllowed">ResetMinimalConcurrencyAllowed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.resetRequestedConcurrency">ResetRequestedConcurrency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.resetRequestedNumReplicas">ResetRequestedNumReplicas</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaximumConcurrencyAllowed` <a name="ResetMaximumConcurrencyAllowed" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.resetMaximumConcurrencyAllowed"></a>

```csharp
private void ResetMaximumConcurrencyAllowed()
```

##### `ResetMinimalConcurrencyAllowed` <a name="ResetMinimalConcurrencyAllowed" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.resetMinimalConcurrencyAllowed"></a>

```csharp
private void ResetMinimalConcurrencyAllowed()
```

##### `ResetRequestedConcurrency` <a name="ResetRequestedConcurrency" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.resetRequestedConcurrency"></a>

```csharp
private void ResetRequestedConcurrency()
```

##### `ResetRequestedNumReplicas` <a name="ResetRequestedNumReplicas" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.resetRequestedNumReplicas"></a>

```csharp
private void ResetRequestedNumReplicas()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.property.changeRequestMessage">ChangeRequestMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.property.changeRequestState">ChangeRequestState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.property.currentConcurrency">CurrentConcurrency</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.property.currentConcurrencyUtilizationPercentage">CurrentConcurrencyUtilizationPercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.property.currentNumReplicas">CurrentNumReplicas</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.property.maximumConcurrencyAllowedInput">MaximumConcurrencyAllowedInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.property.minimalConcurrencyAllowedInput">MinimalConcurrencyAllowedInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.property.requestedConcurrencyInput">RequestedConcurrencyInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.property.requestedNumReplicasInput">RequestedNumReplicasInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.property.maximumConcurrencyAllowed">MaximumConcurrencyAllowed</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.property.minimalConcurrencyAllowed">MinimalConcurrencyAllowed</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.property.requestedConcurrency">RequestedConcurrency</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.property.requestedNumReplicas">RequestedNumReplicas</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfo">DataDatabricksAiSearchEndpointsEndpointsThroughputInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ChangeRequestMessage`<sup>Required</sup> <a name="ChangeRequestMessage" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.property.changeRequestMessage"></a>

```csharp
public string ChangeRequestMessage { get; }
```

- *Type:* string

---

##### `ChangeRequestState`<sup>Required</sup> <a name="ChangeRequestState" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.property.changeRequestState"></a>

```csharp
public string ChangeRequestState { get; }
```

- *Type:* string

---

##### `CurrentConcurrency`<sup>Required</sup> <a name="CurrentConcurrency" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.property.currentConcurrency"></a>

```csharp
public double CurrentConcurrency { get; }
```

- *Type:* double

---

##### `CurrentConcurrencyUtilizationPercentage`<sup>Required</sup> <a name="CurrentConcurrencyUtilizationPercentage" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.property.currentConcurrencyUtilizationPercentage"></a>

```csharp
public double CurrentConcurrencyUtilizationPercentage { get; }
```

- *Type:* double

---

##### `CurrentNumReplicas`<sup>Required</sup> <a name="CurrentNumReplicas" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.property.currentNumReplicas"></a>

```csharp
public double CurrentNumReplicas { get; }
```

- *Type:* double

---

##### `MaximumConcurrencyAllowedInput`<sup>Optional</sup> <a name="MaximumConcurrencyAllowedInput" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.property.maximumConcurrencyAllowedInput"></a>

```csharp
public double MaximumConcurrencyAllowedInput { get; }
```

- *Type:* double

---

##### `MinimalConcurrencyAllowedInput`<sup>Optional</sup> <a name="MinimalConcurrencyAllowedInput" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.property.minimalConcurrencyAllowedInput"></a>

```csharp
public double MinimalConcurrencyAllowedInput { get; }
```

- *Type:* double

---

##### `RequestedConcurrencyInput`<sup>Optional</sup> <a name="RequestedConcurrencyInput" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.property.requestedConcurrencyInput"></a>

```csharp
public double RequestedConcurrencyInput { get; }
```

- *Type:* double

---

##### `RequestedNumReplicasInput`<sup>Optional</sup> <a name="RequestedNumReplicasInput" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.property.requestedNumReplicasInput"></a>

```csharp
public double RequestedNumReplicasInput { get; }
```

- *Type:* double

---

##### `MaximumConcurrencyAllowed`<sup>Required</sup> <a name="MaximumConcurrencyAllowed" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.property.maximumConcurrencyAllowed"></a>

```csharp
public double MaximumConcurrencyAllowed { get; }
```

- *Type:* double

---

##### `MinimalConcurrencyAllowed`<sup>Required</sup> <a name="MinimalConcurrencyAllowed" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.property.minimalConcurrencyAllowed"></a>

```csharp
public double MinimalConcurrencyAllowed { get; }
```

- *Type:* double

---

##### `RequestedConcurrency`<sup>Required</sup> <a name="RequestedConcurrency" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.property.requestedConcurrency"></a>

```csharp
public double RequestedConcurrency { get; }
```

- *Type:* double

---

##### `RequestedNumReplicas`<sup>Required</sup> <a name="RequestedNumReplicas" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.property.requestedNumReplicas"></a>

```csharp
public double RequestedNumReplicas { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfoOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksAiSearchEndpointsEndpointsThroughputInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsEndpointsThroughputInfo">DataDatabricksAiSearchEndpointsEndpointsThroughputInfo</a>

---


### DataDatabricksAiSearchEndpointsProviderConfigOutputReference <a name="DataDatabricksAiSearchEndpointsProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAiSearchEndpointsProviderConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfigOutputReference.resetWorkspaceId"></a>

```csharp
private void ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfig">DataDatabricksAiSearchEndpointsProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfigOutputReference.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfigOutputReference.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAiSearchEndpointsProviderConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAiSearchEndpoints.DataDatabricksAiSearchEndpointsProviderConfig">DataDatabricksAiSearchEndpointsProviderConfig</a>

---



