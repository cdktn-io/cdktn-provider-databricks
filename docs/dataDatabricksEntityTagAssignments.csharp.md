# `dataDatabricksEntityTagAssignments` Submodule <a name="`dataDatabricksEntityTagAssignments` Submodule" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksEntityTagAssignments <a name="DataDatabricksEntityTagAssignments" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/entity_tag_assignments databricks_entity_tag_assignments}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksEntityTagAssignments(Construct Scope, string Id, DataDatabricksEntityTagAssignmentsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsConfig">DataDatabricksEntityTagAssignmentsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsConfig">DataDatabricksEntityTagAssignmentsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.resetMaxResults">ResetMaxResults</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.putProviderConfig"></a>

```csharp
private void PutProviderConfig(DataDatabricksEntityTagAssignmentsProviderConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfig">DataDatabricksEntityTagAssignmentsProviderConfig</a>

---

##### `ResetMaxResults` <a name="ResetMaxResults" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.resetMaxResults"></a>

```csharp
private void ResetMaxResults()
```

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.resetProviderConfig"></a>

```csharp
private void ResetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksEntityTagAssignments resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksEntityTagAssignments.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksEntityTagAssignments.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksEntityTagAssignments.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksEntityTagAssignments.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataDatabricksEntityTagAssignments resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksEntityTagAssignments to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksEntityTagAssignments that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/entity_tag_assignments#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksEntityTagAssignments to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfigOutputReference">DataDatabricksEntityTagAssignmentsProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.tagAssignments">TagAssignments</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsList">DataDatabricksEntityTagAssignmentsTagAssignmentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.entityNameInput">EntityNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.entityTypeInput">EntityTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.maxResultsInput">MaxResultsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.providerConfigInput">ProviderConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfig">DataDatabricksEntityTagAssignmentsProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.entityName">EntityName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.entityType">EntityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.maxResults">MaxResults</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.providerConfig"></a>

```csharp
public DataDatabricksEntityTagAssignmentsProviderConfigOutputReference ProviderConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfigOutputReference">DataDatabricksEntityTagAssignmentsProviderConfigOutputReference</a>

---

##### `TagAssignments`<sup>Required</sup> <a name="TagAssignments" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.tagAssignments"></a>

```csharp
public DataDatabricksEntityTagAssignmentsTagAssignmentsList TagAssignments { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsList">DataDatabricksEntityTagAssignmentsTagAssignmentsList</a>

---

##### `EntityNameInput`<sup>Optional</sup> <a name="EntityNameInput" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.entityNameInput"></a>

```csharp
public string EntityNameInput { get; }
```

- *Type:* string

---

##### `EntityTypeInput`<sup>Optional</sup> <a name="EntityTypeInput" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.entityTypeInput"></a>

```csharp
public string EntityTypeInput { get; }
```

- *Type:* string

---

##### `MaxResultsInput`<sup>Optional</sup> <a name="MaxResultsInput" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.maxResultsInput"></a>

```csharp
public double MaxResultsInput { get; }
```

- *Type:* double

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.providerConfigInput"></a>

```csharp
public IResolvable|DataDatabricksEntityTagAssignmentsProviderConfig ProviderConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfig">DataDatabricksEntityTagAssignmentsProviderConfig</a>

---

##### `EntityName`<sup>Required</sup> <a name="EntityName" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.entityName"></a>

```csharp
public string EntityName { get; }
```

- *Type:* string

---

##### `EntityType`<sup>Required</sup> <a name="EntityType" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.entityType"></a>

```csharp
public string EntityType { get; }
```

- *Type:* string

---

##### `MaxResults`<sup>Required</sup> <a name="MaxResults" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.maxResults"></a>

```csharp
public double MaxResults { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignments.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksEntityTagAssignmentsConfig <a name="DataDatabricksEntityTagAssignmentsConfig" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksEntityTagAssignmentsConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string EntityName,
    string EntityType,
    double MaxResults = null,
    DataDatabricksEntityTagAssignmentsProviderConfig ProviderConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsConfig.property.entityName">EntityName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/entity_tag_assignments#entity_name DataDatabricksEntityTagAssignments#entity_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsConfig.property.entityType">EntityType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/entity_tag_assignments#entity_type DataDatabricksEntityTagAssignments#entity_type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsConfig.property.maxResults">MaxResults</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/entity_tag_assignments#max_results DataDatabricksEntityTagAssignments#max_results}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfig">DataDatabricksEntityTagAssignmentsProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/entity_tag_assignments#provider_config DataDatabricksEntityTagAssignments#provider_config}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `EntityName`<sup>Required</sup> <a name="EntityName" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsConfig.property.entityName"></a>

```csharp
public string EntityName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/entity_tag_assignments#entity_name DataDatabricksEntityTagAssignments#entity_name}.

---

##### `EntityType`<sup>Required</sup> <a name="EntityType" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsConfig.property.entityType"></a>

```csharp
public string EntityType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/entity_tag_assignments#entity_type DataDatabricksEntityTagAssignments#entity_type}.

---

##### `MaxResults`<sup>Optional</sup> <a name="MaxResults" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsConfig.property.maxResults"></a>

```csharp
public double MaxResults { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/entity_tag_assignments#max_results DataDatabricksEntityTagAssignments#max_results}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsConfig.property.providerConfig"></a>

```csharp
public DataDatabricksEntityTagAssignmentsProviderConfig ProviderConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfig">DataDatabricksEntityTagAssignmentsProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/entity_tag_assignments#provider_config DataDatabricksEntityTagAssignments#provider_config}.

---

### DataDatabricksEntityTagAssignmentsProviderConfig <a name="DataDatabricksEntityTagAssignmentsProviderConfig" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksEntityTagAssignmentsProviderConfig {
    string WorkspaceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/entity_tag_assignments#workspace_id DataDatabricksEntityTagAssignments#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/entity_tag_assignments#workspace_id DataDatabricksEntityTagAssignments#workspace_id}.

---

### DataDatabricksEntityTagAssignmentsTagAssignments <a name="DataDatabricksEntityTagAssignmentsTagAssignments" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignments"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignments.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksEntityTagAssignmentsTagAssignments {
    string EntityName,
    string EntityType,
    string TagKey,
    DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfig ProviderConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignments.property.entityName">EntityName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/entity_tag_assignments#entity_name DataDatabricksEntityTagAssignments#entity_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignments.property.entityType">EntityType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/entity_tag_assignments#entity_type DataDatabricksEntityTagAssignments#entity_type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignments.property.tagKey">TagKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/entity_tag_assignments#tag_key DataDatabricksEntityTagAssignments#tag_key}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignments.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfig">DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/entity_tag_assignments#provider_config DataDatabricksEntityTagAssignments#provider_config}. |

---

##### `EntityName`<sup>Required</sup> <a name="EntityName" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignments.property.entityName"></a>

```csharp
public string EntityName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/entity_tag_assignments#entity_name DataDatabricksEntityTagAssignments#entity_name}.

---

##### `EntityType`<sup>Required</sup> <a name="EntityType" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignments.property.entityType"></a>

```csharp
public string EntityType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/entity_tag_assignments#entity_type DataDatabricksEntityTagAssignments#entity_type}.

---

##### `TagKey`<sup>Required</sup> <a name="TagKey" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignments.property.tagKey"></a>

```csharp
public string TagKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/entity_tag_assignments#tag_key DataDatabricksEntityTagAssignments#tag_key}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignments.property.providerConfig"></a>

```csharp
public DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfig ProviderConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfig">DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/entity_tag_assignments#provider_config DataDatabricksEntityTagAssignments#provider_config}.

---

### DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfig <a name="DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfig" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfig {
    string WorkspaceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/entity_tag_assignments#workspace_id DataDatabricksEntityTagAssignments#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/entity_tag_assignments#workspace_id DataDatabricksEntityTagAssignments#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksEntityTagAssignmentsProviderConfigOutputReference <a name="DataDatabricksEntityTagAssignmentsProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksEntityTagAssignmentsProviderConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfigOutputReference.resetWorkspaceId"></a>

```csharp
private void ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfig">DataDatabricksEntityTagAssignmentsProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfigOutputReference.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfigOutputReference.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksEntityTagAssignmentsProviderConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsProviderConfig">DataDatabricksEntityTagAssignmentsProviderConfig</a>

---


### DataDatabricksEntityTagAssignmentsTagAssignmentsList <a name="DataDatabricksEntityTagAssignmentsTagAssignmentsList" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksEntityTagAssignmentsTagAssignmentsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsList.get"></a>

```csharp
private DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignments">DataDatabricksEntityTagAssignmentsTagAssignments</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsList.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksEntityTagAssignmentsTagAssignments[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignments">DataDatabricksEntityTagAssignmentsTagAssignments</a>[]

---


### DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference <a name="DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.putProviderConfig"></a>

```csharp
private void PutProviderConfig(DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfig">DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfig</a>

---

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.resetProviderConfig"></a>

```csharp
private void ResetProviderConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference">DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.property.sourceType">SourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.property.tagValue">TagValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.property.updatedBy">UpdatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.property.entityNameInput">EntityNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.property.entityTypeInput">EntityTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.property.providerConfigInput">ProviderConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfig">DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.property.tagKeyInput">TagKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.property.entityName">EntityName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.property.entityType">EntityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.property.tagKey">TagKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignments">DataDatabricksEntityTagAssignmentsTagAssignments</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.property.providerConfig"></a>

```csharp
public DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference ProviderConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference">DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference</a>

---

##### `SourceType`<sup>Required</sup> <a name="SourceType" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.property.sourceType"></a>

```csharp
public string SourceType { get; }
```

- *Type:* string

---

##### `TagValue`<sup>Required</sup> <a name="TagValue" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.property.tagValue"></a>

```csharp
public string TagValue { get; }
```

- *Type:* string

---

##### `UpdatedBy`<sup>Required</sup> <a name="UpdatedBy" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.property.updatedBy"></a>

```csharp
public string UpdatedBy { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `EntityNameInput`<sup>Optional</sup> <a name="EntityNameInput" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.property.entityNameInput"></a>

```csharp
public string EntityNameInput { get; }
```

- *Type:* string

---

##### `EntityTypeInput`<sup>Optional</sup> <a name="EntityTypeInput" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.property.entityTypeInput"></a>

```csharp
public string EntityTypeInput { get; }
```

- *Type:* string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.property.providerConfigInput"></a>

```csharp
public IResolvable|DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfig ProviderConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfig">DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfig</a>

---

##### `TagKeyInput`<sup>Optional</sup> <a name="TagKeyInput" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.property.tagKeyInput"></a>

```csharp
public string TagKeyInput { get; }
```

- *Type:* string

---

##### `EntityName`<sup>Required</sup> <a name="EntityName" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.property.entityName"></a>

```csharp
public string EntityName { get; }
```

- *Type:* string

---

##### `EntityType`<sup>Required</sup> <a name="EntityType" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.property.entityType"></a>

```csharp
public string EntityType { get; }
```

- *Type:* string

---

##### `TagKey`<sup>Required</sup> <a name="TagKey" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.property.tagKey"></a>

```csharp
public string TagKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksEntityTagAssignmentsTagAssignments InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignments">DataDatabricksEntityTagAssignmentsTagAssignments</a>

---


### DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference <a name="DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.resetWorkspaceId"></a>

```csharp
private void ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfig">DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksEntityTagAssignments.DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfig">DataDatabricksEntityTagAssignmentsTagAssignmentsProviderConfig</a>

---



