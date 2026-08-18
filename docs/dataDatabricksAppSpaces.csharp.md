# `dataDatabricksAppSpaces` Submodule <a name="`dataDatabricksAppSpaces` Submodule" id="@cdktn/provider-databricks.dataDatabricksAppSpaces"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksAppSpaces <a name="DataDatabricksAppSpaces" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/app_spaces databricks_app_spaces}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppSpaces(Construct Scope, string Id, DataDatabricksAppSpacesConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesConfig">DataDatabricksAppSpacesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesConfig">DataDatabricksAppSpacesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.resetPageSize">ResetPageSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.putProviderConfig"></a>

```csharp
private void PutProviderConfig(DataDatabricksAppSpacesProviderConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfig">DataDatabricksAppSpacesProviderConfig</a>

---

##### `ResetPageSize` <a name="ResetPageSize" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.resetPageSize"></a>

```csharp
private void ResetPageSize()
```

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.resetProviderConfig"></a>

```csharp
private void ResetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksAppSpaces resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksAppSpaces.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksAppSpaces.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksAppSpaces.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksAppSpaces.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataDatabricksAppSpaces resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksAppSpaces to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksAppSpaces that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/app_spaces#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksAppSpaces to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfigOutputReference">DataDatabricksAppSpacesProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.property.spaces">Spaces</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesList">DataDatabricksAppSpacesSpacesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.property.pageSizeInput">PageSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.property.providerConfigInput">ProviderConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfig">DataDatabricksAppSpacesProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.property.pageSize">PageSize</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.property.providerConfig"></a>

```csharp
public DataDatabricksAppSpacesProviderConfigOutputReference ProviderConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfigOutputReference">DataDatabricksAppSpacesProviderConfigOutputReference</a>

---

##### `Spaces`<sup>Required</sup> <a name="Spaces" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.property.spaces"></a>

```csharp
public DataDatabricksAppSpacesSpacesList Spaces { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesList">DataDatabricksAppSpacesSpacesList</a>

---

##### `PageSizeInput`<sup>Optional</sup> <a name="PageSizeInput" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.property.pageSizeInput"></a>

```csharp
public double PageSizeInput { get; }
```

- *Type:* double

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.property.providerConfigInput"></a>

```csharp
public IResolvable|DataDatabricksAppSpacesProviderConfig ProviderConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfig">DataDatabricksAppSpacesProviderConfig</a>

---

##### `PageSize`<sup>Required</sup> <a name="PageSize" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.property.pageSize"></a>

```csharp
public double PageSize { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpaces.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksAppSpacesConfig <a name="DataDatabricksAppSpacesConfig" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppSpacesConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    double PageSize = null,
    DataDatabricksAppSpacesProviderConfig ProviderConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesConfig.property.pageSize">PageSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/app_spaces#page_size DataDatabricksAppSpaces#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfig">DataDatabricksAppSpacesProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/app_spaces#provider_config DataDatabricksAppSpaces#provider_config}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `PageSize`<sup>Optional</sup> <a name="PageSize" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesConfig.property.pageSize"></a>

```csharp
public double PageSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/app_spaces#page_size DataDatabricksAppSpaces#page_size}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesConfig.property.providerConfig"></a>

```csharp
public DataDatabricksAppSpacesProviderConfig ProviderConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfig">DataDatabricksAppSpacesProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/app_spaces#provider_config DataDatabricksAppSpaces#provider_config}.

---

### DataDatabricksAppSpacesProviderConfig <a name="DataDatabricksAppSpacesProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppSpacesProviderConfig {
    string WorkspaceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/app_spaces#workspace_id DataDatabricksAppSpaces#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/app_spaces#workspace_id DataDatabricksAppSpaces#workspace_id}.

---

### DataDatabricksAppSpacesSpaces <a name="DataDatabricksAppSpacesSpaces" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpaces"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpaces.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppSpacesSpaces {
    string Name,
    DataDatabricksAppSpacesSpacesProviderConfig ProviderConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpaces.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/app_spaces#name DataDatabricksAppSpaces#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpaces.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfig">DataDatabricksAppSpacesSpacesProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/app_spaces#provider_config DataDatabricksAppSpaces#provider_config}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpaces.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/app_spaces#name DataDatabricksAppSpaces#name}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpaces.property.providerConfig"></a>

```csharp
public DataDatabricksAppSpacesSpacesProviderConfig ProviderConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfig">DataDatabricksAppSpacesSpacesProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/app_spaces#provider_config DataDatabricksAppSpaces#provider_config}.

---

### DataDatabricksAppSpacesSpacesProviderConfig <a name="DataDatabricksAppSpacesSpacesProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppSpacesSpacesProviderConfig {
    string WorkspaceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/app_spaces#workspace_id DataDatabricksAppSpaces#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/app_spaces#workspace_id DataDatabricksAppSpaces#workspace_id}.

---

### DataDatabricksAppSpacesSpacesResources <a name="DataDatabricksAppSpacesSpacesResources" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResources.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppSpacesSpacesResources {
    string Name,
    DataDatabricksAppSpacesSpacesResourcesApp App = null,
    DataDatabricksAppSpacesSpacesResourcesDatabase Database = null,
    string Description = null,
    DataDatabricksAppSpacesSpacesResourcesExperiment Experiment = null,
    DataDatabricksAppSpacesSpacesResourcesGenieSpace GenieSpace = null,
    DataDatabricksAppSpacesSpacesResourcesJob Job = null,
    DataDatabricksAppSpacesSpacesResourcesPostgres Postgres = null,
    DataDatabricksAppSpacesSpacesResourcesSecret Secret = null,
    DataDatabricksAppSpacesSpacesResourcesServingEndpoint ServingEndpoint = null,
    DataDatabricksAppSpacesSpacesResourcesSqlWarehouse SqlWarehouse = null,
    DataDatabricksAppSpacesSpacesResourcesUcSecurable UcSecurable = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResources.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/app_spaces#name DataDatabricksAppSpaces#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResources.property.app">App</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesApp">DataDatabricksAppSpacesSpacesResourcesApp</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/app_spaces#app DataDatabricksAppSpaces#app}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResources.property.database">Database</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabase">DataDatabricksAppSpacesSpacesResourcesDatabase</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/app_spaces#database DataDatabricksAppSpaces#database}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResources.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/app_spaces#description DataDatabricksAppSpaces#description}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResources.property.experiment">Experiment</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperiment">DataDatabricksAppSpacesSpacesResourcesExperiment</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/app_spaces#experiment DataDatabricksAppSpaces#experiment}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResources.property.genieSpace">GenieSpace</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpace">DataDatabricksAppSpacesSpacesResourcesGenieSpace</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/app_spaces#genie_space DataDatabricksAppSpaces#genie_space}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResources.property.job">Job</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJob">DataDatabricksAppSpacesSpacesResourcesJob</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/app_spaces#job DataDatabricksAppSpaces#job}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResources.property.postgres">Postgres</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgres">DataDatabricksAppSpacesSpacesResourcesPostgres</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/app_spaces#postgres DataDatabricksAppSpaces#postgres}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResources.property.secret">Secret</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecret">DataDatabricksAppSpacesSpacesResourcesSecret</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/app_spaces#secret DataDatabricksAppSpaces#secret}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResources.property.servingEndpoint">ServingEndpoint</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpoint">DataDatabricksAppSpacesSpacesResourcesServingEndpoint</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/app_spaces#serving_endpoint DataDatabricksAppSpaces#serving_endpoint}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResources.property.sqlWarehouse">SqlWarehouse</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouse">DataDatabricksAppSpacesSpacesResourcesSqlWarehouse</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/app_spaces#sql_warehouse DataDatabricksAppSpaces#sql_warehouse}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResources.property.ucSecurable">UcSecurable</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurable">DataDatabricksAppSpacesSpacesResourcesUcSecurable</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/app_spaces#uc_securable DataDatabricksAppSpaces#uc_securable}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResources.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/app_spaces#name DataDatabricksAppSpaces#name}.

---

##### `App`<sup>Optional</sup> <a name="App" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResources.property.app"></a>

```csharp
public DataDatabricksAppSpacesSpacesResourcesApp App { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesApp">DataDatabricksAppSpacesSpacesResourcesApp</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/app_spaces#app DataDatabricksAppSpaces#app}.

---

##### `Database`<sup>Optional</sup> <a name="Database" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResources.property.database"></a>

```csharp
public DataDatabricksAppSpacesSpacesResourcesDatabase Database { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabase">DataDatabricksAppSpacesSpacesResourcesDatabase</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/app_spaces#database DataDatabricksAppSpaces#database}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResources.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/app_spaces#description DataDatabricksAppSpaces#description}.

---

##### `Experiment`<sup>Optional</sup> <a name="Experiment" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResources.property.experiment"></a>

```csharp
public DataDatabricksAppSpacesSpacesResourcesExperiment Experiment { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperiment">DataDatabricksAppSpacesSpacesResourcesExperiment</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/app_spaces#experiment DataDatabricksAppSpaces#experiment}.

---

##### `GenieSpace`<sup>Optional</sup> <a name="GenieSpace" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResources.property.genieSpace"></a>

```csharp
public DataDatabricksAppSpacesSpacesResourcesGenieSpace GenieSpace { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpace">DataDatabricksAppSpacesSpacesResourcesGenieSpace</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/app_spaces#genie_space DataDatabricksAppSpaces#genie_space}.

---

##### `Job`<sup>Optional</sup> <a name="Job" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResources.property.job"></a>

```csharp
public DataDatabricksAppSpacesSpacesResourcesJob Job { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJob">DataDatabricksAppSpacesSpacesResourcesJob</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/app_spaces#job DataDatabricksAppSpaces#job}.

---

##### `Postgres`<sup>Optional</sup> <a name="Postgres" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResources.property.postgres"></a>

```csharp
public DataDatabricksAppSpacesSpacesResourcesPostgres Postgres { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgres">DataDatabricksAppSpacesSpacesResourcesPostgres</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/app_spaces#postgres DataDatabricksAppSpaces#postgres}.

---

##### `Secret`<sup>Optional</sup> <a name="Secret" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResources.property.secret"></a>

```csharp
public DataDatabricksAppSpacesSpacesResourcesSecret Secret { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecret">DataDatabricksAppSpacesSpacesResourcesSecret</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/app_spaces#secret DataDatabricksAppSpaces#secret}.

---

##### `ServingEndpoint`<sup>Optional</sup> <a name="ServingEndpoint" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResources.property.servingEndpoint"></a>

```csharp
public DataDatabricksAppSpacesSpacesResourcesServingEndpoint ServingEndpoint { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpoint">DataDatabricksAppSpacesSpacesResourcesServingEndpoint</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/app_spaces#serving_endpoint DataDatabricksAppSpaces#serving_endpoint}.

---

##### `SqlWarehouse`<sup>Optional</sup> <a name="SqlWarehouse" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResources.property.sqlWarehouse"></a>

```csharp
public DataDatabricksAppSpacesSpacesResourcesSqlWarehouse SqlWarehouse { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouse">DataDatabricksAppSpacesSpacesResourcesSqlWarehouse</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/app_spaces#sql_warehouse DataDatabricksAppSpaces#sql_warehouse}.

---

##### `UcSecurable`<sup>Optional</sup> <a name="UcSecurable" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResources.property.ucSecurable"></a>

```csharp
public DataDatabricksAppSpacesSpacesResourcesUcSecurable UcSecurable { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurable">DataDatabricksAppSpacesSpacesResourcesUcSecurable</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/app_spaces#uc_securable DataDatabricksAppSpaces#uc_securable}.

---

### DataDatabricksAppSpacesSpacesResourcesApp <a name="DataDatabricksAppSpacesSpacesResourcesApp" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesApp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesApp.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppSpacesSpacesResourcesApp {
    string Name = null,
    string Permission = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesApp.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/app_spaces#name DataDatabricksAppSpaces#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesApp.property.permission">Permission</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/app_spaces#permission DataDatabricksAppSpaces#permission}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesApp.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/app_spaces#name DataDatabricksAppSpaces#name}.

---

##### `Permission`<sup>Optional</sup> <a name="Permission" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesApp.property.permission"></a>

```csharp
public string Permission { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/app_spaces#permission DataDatabricksAppSpaces#permission}.

---

### DataDatabricksAppSpacesSpacesResourcesDatabase <a name="DataDatabricksAppSpacesSpacesResourcesDatabase" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabase"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabase.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppSpacesSpacesResourcesDatabase {
    string DatabaseName,
    string InstanceName,
    string Permission
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabase.property.databaseName">DatabaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/app_spaces#database_name DataDatabricksAppSpaces#database_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabase.property.instanceName">InstanceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/app_spaces#instance_name DataDatabricksAppSpaces#instance_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabase.property.permission">Permission</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/app_spaces#permission DataDatabricksAppSpaces#permission}. |

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabase.property.databaseName"></a>

```csharp
public string DatabaseName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/app_spaces#database_name DataDatabricksAppSpaces#database_name}.

---

##### `InstanceName`<sup>Required</sup> <a name="InstanceName" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabase.property.instanceName"></a>

```csharp
public string InstanceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/app_spaces#instance_name DataDatabricksAppSpaces#instance_name}.

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabase.property.permission"></a>

```csharp
public string Permission { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/app_spaces#permission DataDatabricksAppSpaces#permission}.

---

### DataDatabricksAppSpacesSpacesResourcesExperiment <a name="DataDatabricksAppSpacesSpacesResourcesExperiment" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperiment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperiment.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppSpacesSpacesResourcesExperiment {
    string ExperimentId,
    string Permission
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperiment.property.experimentId">ExperimentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/app_spaces#experiment_id DataDatabricksAppSpaces#experiment_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperiment.property.permission">Permission</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/app_spaces#permission DataDatabricksAppSpaces#permission}. |

---

##### `ExperimentId`<sup>Required</sup> <a name="ExperimentId" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperiment.property.experimentId"></a>

```csharp
public string ExperimentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/app_spaces#experiment_id DataDatabricksAppSpaces#experiment_id}.

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperiment.property.permission"></a>

```csharp
public string Permission { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/app_spaces#permission DataDatabricksAppSpaces#permission}.

---

### DataDatabricksAppSpacesSpacesResourcesGenieSpace <a name="DataDatabricksAppSpacesSpacesResourcesGenieSpace" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpace"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpace.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppSpacesSpacesResourcesGenieSpace {
    string Name,
    string Permission,
    string SpaceId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpace.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/app_spaces#name DataDatabricksAppSpaces#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpace.property.permission">Permission</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/app_spaces#permission DataDatabricksAppSpaces#permission}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpace.property.spaceId">SpaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/app_spaces#space_id DataDatabricksAppSpaces#space_id}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpace.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/app_spaces#name DataDatabricksAppSpaces#name}.

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpace.property.permission"></a>

```csharp
public string Permission { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/app_spaces#permission DataDatabricksAppSpaces#permission}.

---

##### `SpaceId`<sup>Required</sup> <a name="SpaceId" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpace.property.spaceId"></a>

```csharp
public string SpaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/app_spaces#space_id DataDatabricksAppSpaces#space_id}.

---

### DataDatabricksAppSpacesSpacesResourcesJob <a name="DataDatabricksAppSpacesSpacesResourcesJob" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJob"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJob.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppSpacesSpacesResourcesJob {
    string Id,
    string Permission
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJob.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/app_spaces#id DataDatabricksAppSpaces#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJob.property.permission">Permission</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/app_spaces#permission DataDatabricksAppSpaces#permission}. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJob.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/app_spaces#id DataDatabricksAppSpaces#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJob.property.permission"></a>

```csharp
public string Permission { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/app_spaces#permission DataDatabricksAppSpaces#permission}.

---

### DataDatabricksAppSpacesSpacesResourcesPostgres <a name="DataDatabricksAppSpacesSpacesResourcesPostgres" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgres"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgres.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppSpacesSpacesResourcesPostgres {
    string Branch = null,
    string Database = null,
    string Permission = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgres.property.branch">Branch</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/app_spaces#branch DataDatabricksAppSpaces#branch}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgres.property.database">Database</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/app_spaces#database DataDatabricksAppSpaces#database}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgres.property.permission">Permission</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/app_spaces#permission DataDatabricksAppSpaces#permission}. |

---

##### `Branch`<sup>Optional</sup> <a name="Branch" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgres.property.branch"></a>

```csharp
public string Branch { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/app_spaces#branch DataDatabricksAppSpaces#branch}.

---

##### `Database`<sup>Optional</sup> <a name="Database" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgres.property.database"></a>

```csharp
public string Database { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/app_spaces#database DataDatabricksAppSpaces#database}.

---

##### `Permission`<sup>Optional</sup> <a name="Permission" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgres.property.permission"></a>

```csharp
public string Permission { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/app_spaces#permission DataDatabricksAppSpaces#permission}.

---

### DataDatabricksAppSpacesSpacesResourcesSecret <a name="DataDatabricksAppSpacesSpacesResourcesSecret" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecret"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecret.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppSpacesSpacesResourcesSecret {
    string Key,
    string Permission,
    string Scope
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecret.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/app_spaces#key DataDatabricksAppSpaces#key}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecret.property.permission">Permission</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/app_spaces#permission DataDatabricksAppSpaces#permission}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecret.property.scope">Scope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/app_spaces#scope DataDatabricksAppSpaces#scope}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecret.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/app_spaces#key DataDatabricksAppSpaces#key}.

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecret.property.permission"></a>

```csharp
public string Permission { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/app_spaces#permission DataDatabricksAppSpaces#permission}.

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecret.property.scope"></a>

```csharp
public string Scope { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/app_spaces#scope DataDatabricksAppSpaces#scope}.

---

### DataDatabricksAppSpacesSpacesResourcesServingEndpoint <a name="DataDatabricksAppSpacesSpacesResourcesServingEndpoint" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpoint.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppSpacesSpacesResourcesServingEndpoint {
    string Name,
    string Permission
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpoint.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/app_spaces#name DataDatabricksAppSpaces#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpoint.property.permission">Permission</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/app_spaces#permission DataDatabricksAppSpaces#permission}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpoint.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/app_spaces#name DataDatabricksAppSpaces#name}.

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpoint.property.permission"></a>

```csharp
public string Permission { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/app_spaces#permission DataDatabricksAppSpaces#permission}.

---

### DataDatabricksAppSpacesSpacesResourcesSqlWarehouse <a name="DataDatabricksAppSpacesSpacesResourcesSqlWarehouse" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouse"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouse.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppSpacesSpacesResourcesSqlWarehouse {
    string Id,
    string Permission
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouse.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/app_spaces#id DataDatabricksAppSpaces#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouse.property.permission">Permission</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/app_spaces#permission DataDatabricksAppSpaces#permission}. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouse.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/app_spaces#id DataDatabricksAppSpaces#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouse.property.permission"></a>

```csharp
public string Permission { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/app_spaces#permission DataDatabricksAppSpaces#permission}.

---

### DataDatabricksAppSpacesSpacesResourcesUcSecurable <a name="DataDatabricksAppSpacesSpacesResourcesUcSecurable" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurable.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppSpacesSpacesResourcesUcSecurable {
    string Permission,
    string SecurableFullName,
    string SecurableType
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurable.property.permission">Permission</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/app_spaces#permission DataDatabricksAppSpaces#permission}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurable.property.securableFullName">SecurableFullName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/app_spaces#securable_full_name DataDatabricksAppSpaces#securable_full_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurable.property.securableType">SecurableType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/app_spaces#securable_type DataDatabricksAppSpaces#securable_type}. |

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurable.property.permission"></a>

```csharp
public string Permission { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/app_spaces#permission DataDatabricksAppSpaces#permission}.

---

##### `SecurableFullName`<sup>Required</sup> <a name="SecurableFullName" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurable.property.securableFullName"></a>

```csharp
public string SecurableFullName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/app_spaces#securable_full_name DataDatabricksAppSpaces#securable_full_name}.

---

##### `SecurableType`<sup>Required</sup> <a name="SecurableType" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurable.property.securableType"></a>

```csharp
public string SecurableType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.127.0/docs/data-sources/app_spaces#securable_type DataDatabricksAppSpaces#securable_type}.

---

### DataDatabricksAppSpacesSpacesStatus <a name="DataDatabricksAppSpacesSpacesStatus" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatus.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppSpacesSpacesStatus {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksAppSpacesProviderConfigOutputReference <a name="DataDatabricksAppSpacesProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppSpacesProviderConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfigOutputReference.resetWorkspaceId"></a>

```csharp
private void ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfig">DataDatabricksAppSpacesProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfigOutputReference.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfigOutputReference.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAppSpacesProviderConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesProviderConfig">DataDatabricksAppSpacesProviderConfig</a>

---


### DataDatabricksAppSpacesSpacesList <a name="DataDatabricksAppSpacesSpacesList" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppSpacesSpacesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesList.get"></a>

```csharp
private DataDatabricksAppSpacesSpacesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpaces">DataDatabricksAppSpacesSpaces</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesList.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAppSpacesSpaces[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpaces">DataDatabricksAppSpacesSpaces</a>[]

---


### DataDatabricksAppSpacesSpacesOutputReference <a name="DataDatabricksAppSpacesSpacesOutputReference" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppSpacesSpacesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.putProviderConfig"></a>

```csharp
private void PutProviderConfig(DataDatabricksAppSpacesSpacesProviderConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfig">DataDatabricksAppSpacesSpacesProviderConfig</a>

---

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.resetProviderConfig"></a>

```csharp
private void ResetProviderConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.property.creator">Creator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.property.effectiveUsagePolicyId">EffectiveUsagePolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.property.effectiveUserApiScopes">EffectiveUserApiScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfigOutputReference">DataDatabricksAppSpacesSpacesProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.property.resources">Resources</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesList">DataDatabricksAppSpacesSpacesResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.property.servicePrincipalClientId">ServicePrincipalClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.property.servicePrincipalId">ServicePrincipalId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.property.servicePrincipalName">ServicePrincipalName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.property.status">Status</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatusOutputReference">DataDatabricksAppSpacesSpacesStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.property.updater">Updater</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.property.usagePolicyId">UsagePolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.property.userApiScopes">UserApiScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.property.providerConfigInput">ProviderConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfig">DataDatabricksAppSpacesSpacesProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpaces">DataDatabricksAppSpacesSpaces</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Creator`<sup>Required</sup> <a name="Creator" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.property.creator"></a>

```csharp
public string Creator { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `EffectiveUsagePolicyId`<sup>Required</sup> <a name="EffectiveUsagePolicyId" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.property.effectiveUsagePolicyId"></a>

```csharp
public string EffectiveUsagePolicyId { get; }
```

- *Type:* string

---

##### `EffectiveUserApiScopes`<sup>Required</sup> <a name="EffectiveUserApiScopes" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.property.effectiveUserApiScopes"></a>

```csharp
public string[] EffectiveUserApiScopes { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.property.providerConfig"></a>

```csharp
public DataDatabricksAppSpacesSpacesProviderConfigOutputReference ProviderConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfigOutputReference">DataDatabricksAppSpacesSpacesProviderConfigOutputReference</a>

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.property.resources"></a>

```csharp
public DataDatabricksAppSpacesSpacesResourcesList Resources { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesList">DataDatabricksAppSpacesSpacesResourcesList</a>

---

##### `ServicePrincipalClientId`<sup>Required</sup> <a name="ServicePrincipalClientId" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.property.servicePrincipalClientId"></a>

```csharp
public string ServicePrincipalClientId { get; }
```

- *Type:* string

---

##### `ServicePrincipalId`<sup>Required</sup> <a name="ServicePrincipalId" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.property.servicePrincipalId"></a>

```csharp
public double ServicePrincipalId { get; }
```

- *Type:* double

---

##### `ServicePrincipalName`<sup>Required</sup> <a name="ServicePrincipalName" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.property.servicePrincipalName"></a>

```csharp
public string ServicePrincipalName { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.property.status"></a>

```csharp
public DataDatabricksAppSpacesSpacesStatusOutputReference Status { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatusOutputReference">DataDatabricksAppSpacesSpacesStatusOutputReference</a>

---

##### `Updater`<sup>Required</sup> <a name="Updater" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.property.updater"></a>

```csharp
public string Updater { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `UsagePolicyId`<sup>Required</sup> <a name="UsagePolicyId" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.property.usagePolicyId"></a>

```csharp
public string UsagePolicyId { get; }
```

- *Type:* string

---

##### `UserApiScopes`<sup>Required</sup> <a name="UserApiScopes" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.property.userApiScopes"></a>

```csharp
public string[] UserApiScopes { get; }
```

- *Type:* string[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.property.providerConfigInput"></a>

```csharp
public IResolvable|DataDatabricksAppSpacesSpacesProviderConfig ProviderConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfig">DataDatabricksAppSpacesSpacesProviderConfig</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksAppSpacesSpaces InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpaces">DataDatabricksAppSpacesSpaces</a>

---


### DataDatabricksAppSpacesSpacesProviderConfigOutputReference <a name="DataDatabricksAppSpacesSpacesProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppSpacesSpacesProviderConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfigOutputReference.resetWorkspaceId"></a>

```csharp
private void ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfig">DataDatabricksAppSpacesSpacesProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfigOutputReference.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfigOutputReference.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAppSpacesSpacesProviderConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesProviderConfig">DataDatabricksAppSpacesSpacesProviderConfig</a>

---


### DataDatabricksAppSpacesSpacesResourcesAppOutputReference <a name="DataDatabricksAppSpacesSpacesResourcesAppOutputReference" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppSpacesSpacesResourcesAppOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.resetPermission">ResetPermission</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetPermission` <a name="ResetPermission" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.resetPermission"></a>

```csharp
private void ResetPermission()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.property.permissionInput">PermissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.property.permission">Permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesApp">DataDatabricksAppSpacesSpacesResourcesApp</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PermissionInput`<sup>Optional</sup> <a name="PermissionInput" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.property.permissionInput"></a>

```csharp
public string PermissionInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.property.permission"></a>

```csharp
public string Permission { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAppSpacesSpacesResourcesApp InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesApp">DataDatabricksAppSpacesSpacesResourcesApp</a>

---


### DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference <a name="DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.property.databaseNameInput">DatabaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.property.instanceNameInput">InstanceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.property.permissionInput">PermissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.property.instanceName">InstanceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.property.permission">Permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabase">DataDatabricksAppSpacesSpacesResourcesDatabase</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.property.databaseNameInput"></a>

```csharp
public string DatabaseNameInput { get; }
```

- *Type:* string

---

##### `InstanceNameInput`<sup>Optional</sup> <a name="InstanceNameInput" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.property.instanceNameInput"></a>

```csharp
public string InstanceNameInput { get; }
```

- *Type:* string

---

##### `PermissionInput`<sup>Optional</sup> <a name="PermissionInput" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.property.permissionInput"></a>

```csharp
public string PermissionInput { get; }
```

- *Type:* string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `InstanceName`<sup>Required</sup> <a name="InstanceName" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.property.instanceName"></a>

```csharp
public string InstanceName { get; }
```

- *Type:* string

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.property.permission"></a>

```csharp
public string Permission { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAppSpacesSpacesResourcesDatabase InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabase">DataDatabricksAppSpacesSpacesResourcesDatabase</a>

---


### DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference <a name="DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference.property.experimentIdInput">ExperimentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference.property.permissionInput">PermissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference.property.experimentId">ExperimentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference.property.permission">Permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperiment">DataDatabricksAppSpacesSpacesResourcesExperiment</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExperimentIdInput`<sup>Optional</sup> <a name="ExperimentIdInput" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference.property.experimentIdInput"></a>

```csharp
public string ExperimentIdInput { get; }
```

- *Type:* string

---

##### `PermissionInput`<sup>Optional</sup> <a name="PermissionInput" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference.property.permissionInput"></a>

```csharp
public string PermissionInput { get; }
```

- *Type:* string

---

##### `ExperimentId`<sup>Required</sup> <a name="ExperimentId" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference.property.experimentId"></a>

```csharp
public string ExperimentId { get; }
```

- *Type:* string

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference.property.permission"></a>

```csharp
public string Permission { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAppSpacesSpacesResourcesExperiment InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperiment">DataDatabricksAppSpacesSpacesResourcesExperiment</a>

---


### DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference <a name="DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.property.permissionInput">PermissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.property.spaceIdInput">SpaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.property.permission">Permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.property.spaceId">SpaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpace">DataDatabricksAppSpacesSpacesResourcesGenieSpace</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PermissionInput`<sup>Optional</sup> <a name="PermissionInput" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.property.permissionInput"></a>

```csharp
public string PermissionInput { get; }
```

- *Type:* string

---

##### `SpaceIdInput`<sup>Optional</sup> <a name="SpaceIdInput" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.property.spaceIdInput"></a>

```csharp
public string SpaceIdInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.property.permission"></a>

```csharp
public string Permission { get; }
```

- *Type:* string

---

##### `SpaceId`<sup>Required</sup> <a name="SpaceId" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.property.spaceId"></a>

```csharp
public string SpaceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAppSpacesSpacesResourcesGenieSpace InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpace">DataDatabricksAppSpacesSpacesResourcesGenieSpace</a>

---


### DataDatabricksAppSpacesSpacesResourcesJobOutputReference <a name="DataDatabricksAppSpacesSpacesResourcesJobOutputReference" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJobOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJobOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppSpacesSpacesResourcesJobOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJobOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJobOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJobOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJobOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJobOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJobOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJobOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJobOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJobOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJobOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJobOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJobOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJobOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJobOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJobOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJobOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJobOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJobOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJobOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJobOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJobOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJobOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJobOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJobOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJobOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJobOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJobOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJobOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJobOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJobOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJobOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJobOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJobOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJobOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJobOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJobOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJobOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJobOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJobOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJobOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJobOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJobOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJobOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJobOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJobOutputReference.property.permissionInput">PermissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJobOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJobOutputReference.property.permission">Permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJobOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJob">DataDatabricksAppSpacesSpacesResourcesJob</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJobOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJobOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJobOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PermissionInput`<sup>Optional</sup> <a name="PermissionInput" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJobOutputReference.property.permissionInput"></a>

```csharp
public string PermissionInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJobOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJobOutputReference.property.permission"></a>

```csharp
public string Permission { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJobOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAppSpacesSpacesResourcesJob InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJob">DataDatabricksAppSpacesSpacesResourcesJob</a>

---


### DataDatabricksAppSpacesSpacesResourcesList <a name="DataDatabricksAppSpacesSpacesResourcesList" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppSpacesSpacesResourcesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesList.get"></a>

```csharp
private DataDatabricksAppSpacesSpacesResourcesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResources">DataDatabricksAppSpacesSpacesResources</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesList.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAppSpacesSpacesResources[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResources">DataDatabricksAppSpacesSpacesResources</a>[]

---


### DataDatabricksAppSpacesSpacesResourcesOutputReference <a name="DataDatabricksAppSpacesSpacesResourcesOutputReference" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppSpacesSpacesResourcesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.putApp">PutApp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.putDatabase">PutDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.putExperiment">PutExperiment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.putGenieSpace">PutGenieSpace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.putJob">PutJob</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.putPostgres">PutPostgres</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.putSecret">PutSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.putServingEndpoint">PutServingEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.putSqlWarehouse">PutSqlWarehouse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.putUcSecurable">PutUcSecurable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.resetApp">ResetApp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.resetDatabase">ResetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.resetExperiment">ResetExperiment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.resetGenieSpace">ResetGenieSpace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.resetJob">ResetJob</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.resetPostgres">ResetPostgres</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.resetSecret">ResetSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.resetServingEndpoint">ResetServingEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.resetSqlWarehouse">ResetSqlWarehouse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.resetUcSecurable">ResetUcSecurable</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApp` <a name="PutApp" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.putApp"></a>

```csharp
private void PutApp(DataDatabricksAppSpacesSpacesResourcesApp Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.putApp.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesApp">DataDatabricksAppSpacesSpacesResourcesApp</a>

---

##### `PutDatabase` <a name="PutDatabase" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.putDatabase"></a>

```csharp
private void PutDatabase(DataDatabricksAppSpacesSpacesResourcesDatabase Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.putDatabase.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabase">DataDatabricksAppSpacesSpacesResourcesDatabase</a>

---

##### `PutExperiment` <a name="PutExperiment" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.putExperiment"></a>

```csharp
private void PutExperiment(DataDatabricksAppSpacesSpacesResourcesExperiment Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.putExperiment.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperiment">DataDatabricksAppSpacesSpacesResourcesExperiment</a>

---

##### `PutGenieSpace` <a name="PutGenieSpace" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.putGenieSpace"></a>

```csharp
private void PutGenieSpace(DataDatabricksAppSpacesSpacesResourcesGenieSpace Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.putGenieSpace.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpace">DataDatabricksAppSpacesSpacesResourcesGenieSpace</a>

---

##### `PutJob` <a name="PutJob" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.putJob"></a>

```csharp
private void PutJob(DataDatabricksAppSpacesSpacesResourcesJob Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.putJob.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJob">DataDatabricksAppSpacesSpacesResourcesJob</a>

---

##### `PutPostgres` <a name="PutPostgres" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.putPostgres"></a>

```csharp
private void PutPostgres(DataDatabricksAppSpacesSpacesResourcesPostgres Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.putPostgres.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgres">DataDatabricksAppSpacesSpacesResourcesPostgres</a>

---

##### `PutSecret` <a name="PutSecret" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.putSecret"></a>

```csharp
private void PutSecret(DataDatabricksAppSpacesSpacesResourcesSecret Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.putSecret.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecret">DataDatabricksAppSpacesSpacesResourcesSecret</a>

---

##### `PutServingEndpoint` <a name="PutServingEndpoint" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.putServingEndpoint"></a>

```csharp
private void PutServingEndpoint(DataDatabricksAppSpacesSpacesResourcesServingEndpoint Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.putServingEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpoint">DataDatabricksAppSpacesSpacesResourcesServingEndpoint</a>

---

##### `PutSqlWarehouse` <a name="PutSqlWarehouse" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.putSqlWarehouse"></a>

```csharp
private void PutSqlWarehouse(DataDatabricksAppSpacesSpacesResourcesSqlWarehouse Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.putSqlWarehouse.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouse">DataDatabricksAppSpacesSpacesResourcesSqlWarehouse</a>

---

##### `PutUcSecurable` <a name="PutUcSecurable" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.putUcSecurable"></a>

```csharp
private void PutUcSecurable(DataDatabricksAppSpacesSpacesResourcesUcSecurable Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.putUcSecurable.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurable">DataDatabricksAppSpacesSpacesResourcesUcSecurable</a>

---

##### `ResetApp` <a name="ResetApp" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.resetApp"></a>

```csharp
private void ResetApp()
```

##### `ResetDatabase` <a name="ResetDatabase" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.resetDatabase"></a>

```csharp
private void ResetDatabase()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetExperiment` <a name="ResetExperiment" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.resetExperiment"></a>

```csharp
private void ResetExperiment()
```

##### `ResetGenieSpace` <a name="ResetGenieSpace" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.resetGenieSpace"></a>

```csharp
private void ResetGenieSpace()
```

##### `ResetJob` <a name="ResetJob" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.resetJob"></a>

```csharp
private void ResetJob()
```

##### `ResetPostgres` <a name="ResetPostgres" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.resetPostgres"></a>

```csharp
private void ResetPostgres()
```

##### `ResetSecret` <a name="ResetSecret" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.resetSecret"></a>

```csharp
private void ResetSecret()
```

##### `ResetServingEndpoint` <a name="ResetServingEndpoint" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.resetServingEndpoint"></a>

```csharp
private void ResetServingEndpoint()
```

##### `ResetSqlWarehouse` <a name="ResetSqlWarehouse" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.resetSqlWarehouse"></a>

```csharp
private void ResetSqlWarehouse()
```

##### `ResetUcSecurable` <a name="ResetUcSecurable" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.resetUcSecurable"></a>

```csharp
private void ResetUcSecurable()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.property.app">App</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference">DataDatabricksAppSpacesSpacesResourcesAppOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.property.database">Database</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference">DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.property.experiment">Experiment</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference">DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.property.genieSpace">GenieSpace</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference">DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.property.job">Job</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJobOutputReference">DataDatabricksAppSpacesSpacesResourcesJobOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.property.postgres">Postgres</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference">DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.property.secret">Secret</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference">DataDatabricksAppSpacesSpacesResourcesSecretOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.property.servingEndpoint">ServingEndpoint</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference">DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.property.sqlWarehouse">SqlWarehouse</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference">DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.property.ucSecurable">UcSecurable</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference">DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.property.appInput">AppInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesApp">DataDatabricksAppSpacesSpacesResourcesApp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.property.databaseInput">DatabaseInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabase">DataDatabricksAppSpacesSpacesResourcesDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.property.experimentInput">ExperimentInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperiment">DataDatabricksAppSpacesSpacesResourcesExperiment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.property.genieSpaceInput">GenieSpaceInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpace">DataDatabricksAppSpacesSpacesResourcesGenieSpace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.property.jobInput">JobInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJob">DataDatabricksAppSpacesSpacesResourcesJob</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.property.postgresInput">PostgresInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgres">DataDatabricksAppSpacesSpacesResourcesPostgres</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.property.secretInput">SecretInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecret">DataDatabricksAppSpacesSpacesResourcesSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.property.servingEndpointInput">ServingEndpointInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpoint">DataDatabricksAppSpacesSpacesResourcesServingEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.property.sqlWarehouseInput">SqlWarehouseInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouse">DataDatabricksAppSpacesSpacesResourcesSqlWarehouse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.property.ucSecurableInput">UcSecurableInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurable">DataDatabricksAppSpacesSpacesResourcesUcSecurable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResources">DataDatabricksAppSpacesSpacesResources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `App`<sup>Required</sup> <a name="App" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.property.app"></a>

```csharp
public DataDatabricksAppSpacesSpacesResourcesAppOutputReference App { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesAppOutputReference">DataDatabricksAppSpacesSpacesResourcesAppOutputReference</a>

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.property.database"></a>

```csharp
public DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference Database { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference">DataDatabricksAppSpacesSpacesResourcesDatabaseOutputReference</a>

---

##### `Experiment`<sup>Required</sup> <a name="Experiment" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.property.experiment"></a>

```csharp
public DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference Experiment { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference">DataDatabricksAppSpacesSpacesResourcesExperimentOutputReference</a>

---

##### `GenieSpace`<sup>Required</sup> <a name="GenieSpace" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.property.genieSpace"></a>

```csharp
public DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference GenieSpace { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference">DataDatabricksAppSpacesSpacesResourcesGenieSpaceOutputReference</a>

---

##### `Job`<sup>Required</sup> <a name="Job" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.property.job"></a>

```csharp
public DataDatabricksAppSpacesSpacesResourcesJobOutputReference Job { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJobOutputReference">DataDatabricksAppSpacesSpacesResourcesJobOutputReference</a>

---

##### `Postgres`<sup>Required</sup> <a name="Postgres" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.property.postgres"></a>

```csharp
public DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference Postgres { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference">DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference</a>

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.property.secret"></a>

```csharp
public DataDatabricksAppSpacesSpacesResourcesSecretOutputReference Secret { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference">DataDatabricksAppSpacesSpacesResourcesSecretOutputReference</a>

---

##### `ServingEndpoint`<sup>Required</sup> <a name="ServingEndpoint" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.property.servingEndpoint"></a>

```csharp
public DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference ServingEndpoint { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference">DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference</a>

---

##### `SqlWarehouse`<sup>Required</sup> <a name="SqlWarehouse" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.property.sqlWarehouse"></a>

```csharp
public DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference SqlWarehouse { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference">DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference</a>

---

##### `UcSecurable`<sup>Required</sup> <a name="UcSecurable" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.property.ucSecurable"></a>

```csharp
public DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference UcSecurable { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference">DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference</a>

---

##### `AppInput`<sup>Optional</sup> <a name="AppInput" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.property.appInput"></a>

```csharp
public IResolvable|DataDatabricksAppSpacesSpacesResourcesApp AppInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesApp">DataDatabricksAppSpacesSpacesResourcesApp</a>

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.property.databaseInput"></a>

```csharp
public IResolvable|DataDatabricksAppSpacesSpacesResourcesDatabase DatabaseInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesDatabase">DataDatabricksAppSpacesSpacesResourcesDatabase</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExperimentInput`<sup>Optional</sup> <a name="ExperimentInput" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.property.experimentInput"></a>

```csharp
public IResolvable|DataDatabricksAppSpacesSpacesResourcesExperiment ExperimentInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesExperiment">DataDatabricksAppSpacesSpacesResourcesExperiment</a>

---

##### `GenieSpaceInput`<sup>Optional</sup> <a name="GenieSpaceInput" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.property.genieSpaceInput"></a>

```csharp
public IResolvable|DataDatabricksAppSpacesSpacesResourcesGenieSpace GenieSpaceInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesGenieSpace">DataDatabricksAppSpacesSpacesResourcesGenieSpace</a>

---

##### `JobInput`<sup>Optional</sup> <a name="JobInput" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.property.jobInput"></a>

```csharp
public IResolvable|DataDatabricksAppSpacesSpacesResourcesJob JobInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesJob">DataDatabricksAppSpacesSpacesResourcesJob</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PostgresInput`<sup>Optional</sup> <a name="PostgresInput" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.property.postgresInput"></a>

```csharp
public IResolvable|DataDatabricksAppSpacesSpacesResourcesPostgres PostgresInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgres">DataDatabricksAppSpacesSpacesResourcesPostgres</a>

---

##### `SecretInput`<sup>Optional</sup> <a name="SecretInput" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.property.secretInput"></a>

```csharp
public IResolvable|DataDatabricksAppSpacesSpacesResourcesSecret SecretInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecret">DataDatabricksAppSpacesSpacesResourcesSecret</a>

---

##### `ServingEndpointInput`<sup>Optional</sup> <a name="ServingEndpointInput" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.property.servingEndpointInput"></a>

```csharp
public IResolvable|DataDatabricksAppSpacesSpacesResourcesServingEndpoint ServingEndpointInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpoint">DataDatabricksAppSpacesSpacesResourcesServingEndpoint</a>

---

##### `SqlWarehouseInput`<sup>Optional</sup> <a name="SqlWarehouseInput" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.property.sqlWarehouseInput"></a>

```csharp
public IResolvable|DataDatabricksAppSpacesSpacesResourcesSqlWarehouse SqlWarehouseInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouse">DataDatabricksAppSpacesSpacesResourcesSqlWarehouse</a>

---

##### `UcSecurableInput`<sup>Optional</sup> <a name="UcSecurableInput" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.property.ucSecurableInput"></a>

```csharp
public IResolvable|DataDatabricksAppSpacesSpacesResourcesUcSecurable UcSecurableInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurable">DataDatabricksAppSpacesSpacesResourcesUcSecurable</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksAppSpacesSpacesResources InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResources">DataDatabricksAppSpacesSpacesResources</a>

---


### DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference <a name="DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.resetBranch">ResetBranch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.resetDatabase">ResetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.resetPermission">ResetPermission</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBranch` <a name="ResetBranch" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.resetBranch"></a>

```csharp
private void ResetBranch()
```

##### `ResetDatabase` <a name="ResetDatabase" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.resetDatabase"></a>

```csharp
private void ResetDatabase()
```

##### `ResetPermission` <a name="ResetPermission" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.resetPermission"></a>

```csharp
private void ResetPermission()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.property.branchInput">BranchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.property.databaseInput">DatabaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.property.permissionInput">PermissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.property.branch">Branch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.property.database">Database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.property.permission">Permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgres">DataDatabricksAppSpacesSpacesResourcesPostgres</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BranchInput`<sup>Optional</sup> <a name="BranchInput" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.property.branchInput"></a>

```csharp
public string BranchInput { get; }
```

- *Type:* string

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.property.databaseInput"></a>

```csharp
public string DatabaseInput { get; }
```

- *Type:* string

---

##### `PermissionInput`<sup>Optional</sup> <a name="PermissionInput" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.property.permissionInput"></a>

```csharp
public string PermissionInput { get; }
```

- *Type:* string

---

##### `Branch`<sup>Required</sup> <a name="Branch" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.property.branch"></a>

```csharp
public string Branch { get; }
```

- *Type:* string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.property.database"></a>

```csharp
public string Database { get; }
```

- *Type:* string

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.property.permission"></a>

```csharp
public string Permission { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgresOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAppSpacesSpacesResourcesPostgres InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesPostgres">DataDatabricksAppSpacesSpacesResourcesPostgres</a>

---


### DataDatabricksAppSpacesSpacesResourcesSecretOutputReference <a name="DataDatabricksAppSpacesSpacesResourcesSecretOutputReference" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppSpacesSpacesResourcesSecretOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.property.permissionInput">PermissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.property.scopeInput">ScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.property.permission">Permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.property.scope">Scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecret">DataDatabricksAppSpacesSpacesResourcesSecret</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `PermissionInput`<sup>Optional</sup> <a name="PermissionInput" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.property.permissionInput"></a>

```csharp
public string PermissionInput { get; }
```

- *Type:* string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.property.scopeInput"></a>

```csharp
public string ScopeInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.property.permission"></a>

```csharp
public string Permission { get; }
```

- *Type:* string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.property.scope"></a>

```csharp
public string Scope { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecretOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAppSpacesSpacesResourcesSecret InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSecret">DataDatabricksAppSpacesSpacesResourcesSecret</a>

---


### DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference <a name="DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference.property.permissionInput">PermissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference.property.permission">Permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpoint">DataDatabricksAppSpacesSpacesResourcesServingEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PermissionInput`<sup>Optional</sup> <a name="PermissionInput" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference.property.permissionInput"></a>

```csharp
public string PermissionInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference.property.permission"></a>

```csharp
public string Permission { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpointOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAppSpacesSpacesResourcesServingEndpoint InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesServingEndpoint">DataDatabricksAppSpacesSpacesResourcesServingEndpoint</a>

---


### DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference <a name="DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference.property.permissionInput">PermissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference.property.permission">Permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouse">DataDatabricksAppSpacesSpacesResourcesSqlWarehouse</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PermissionInput`<sup>Optional</sup> <a name="PermissionInput" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference.property.permissionInput"></a>

```csharp
public string PermissionInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference.property.permission"></a>

```csharp
public string Permission { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouseOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAppSpacesSpacesResourcesSqlWarehouse InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesSqlWarehouse">DataDatabricksAppSpacesSpacesResourcesSqlWarehouse</a>

---


### DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference <a name="DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.property.securableKind">SecurableKind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.property.permissionInput">PermissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.property.securableFullNameInput">SecurableFullNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.property.securableTypeInput">SecurableTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.property.permission">Permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.property.securableFullName">SecurableFullName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.property.securableType">SecurableType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurable">DataDatabricksAppSpacesSpacesResourcesUcSecurable</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecurableKind`<sup>Required</sup> <a name="SecurableKind" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.property.securableKind"></a>

```csharp
public string SecurableKind { get; }
```

- *Type:* string

---

##### `PermissionInput`<sup>Optional</sup> <a name="PermissionInput" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.property.permissionInput"></a>

```csharp
public string PermissionInput { get; }
```

- *Type:* string

---

##### `SecurableFullNameInput`<sup>Optional</sup> <a name="SecurableFullNameInput" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.property.securableFullNameInput"></a>

```csharp
public string SecurableFullNameInput { get; }
```

- *Type:* string

---

##### `SecurableTypeInput`<sup>Optional</sup> <a name="SecurableTypeInput" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.property.securableTypeInput"></a>

```csharp
public string SecurableTypeInput { get; }
```

- *Type:* string

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.property.permission"></a>

```csharp
public string Permission { get; }
```

- *Type:* string

---

##### `SecurableFullName`<sup>Required</sup> <a name="SecurableFullName" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.property.securableFullName"></a>

```csharp
public string SecurableFullName { get; }
```

- *Type:* string

---

##### `SecurableType`<sup>Required</sup> <a name="SecurableType" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.property.securableType"></a>

```csharp
public string SecurableType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurableOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAppSpacesSpacesResourcesUcSecurable InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesResourcesUcSecurable">DataDatabricksAppSpacesSpacesResourcesUcSecurable</a>

---


### DataDatabricksAppSpacesSpacesStatusOutputReference <a name="DataDatabricksAppSpacesSpacesStatusOutputReference" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatusOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAppSpacesSpacesStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatusOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatusOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatusOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatus">DataDatabricksAppSpacesSpacesStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatusOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatusOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatusOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksAppSpacesSpacesStatus InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAppSpaces.DataDatabricksAppSpacesSpacesStatus">DataDatabricksAppSpacesSpacesStatus</a>

---



